const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const contractABI = [
  "function getNumber() view returns (uint256)",
  "function setNumber(uint256 _number)",
];

let provider;
let signer;
let contract;
let busy = false;

const connectButton = document.getElementById("connectButton");
const refreshButton = document.getElementById("refreshButton");
const saveButton = document.getElementById("saveButton");
const walletStatus = document.getElementById("walletStatus");
const currentNumber = document.getElementById("currentNumber");
const numberInput = document.getElementById("numberInput");
const message = document.getElementById("message");
const transactionInfo = document.getElementById("transactionInfo");
const transactionLink = document.getElementById("transactionLink");

connectButton.addEventListener("click", connectWallet);
refreshButton.addEventListener("click", loadNumber);
saveButton.addEventListener("click", saveNumber);

function setBusy(value) {
  busy = value;
  refreshButton.disabled = value || !contract;
  saveButton.disabled = value || !contract;
  connectButton.disabled = value;
}

async function connectWallet() {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask belum terpasang di browser ini.");
    }

    provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const network = await provider.getNetwork();

    if (network.chainId !== 31337n) {
      throw new Error("Pilih Hardhat Local di MetaMask (Chain ID 31337).");
    }

    signer = await provider.getSigner();

    contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Verify that the contract exists at this address.
    const code = await provider.getCode(contractAddress);

    if (code === "0x") {
      contract = null;
      throw new Error(
        "Contract tidak ditemukan. Periksa alamat dan deploy ke node lokal yang aktif.",
      );
    }

    const address = await signer.getAddress();

    walletStatus.textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;

    connectButton.textContent = "Wallet Connected";
    refreshButton.disabled = false;
    saveButton.disabled = false;

    message.textContent = "Wallet connected successfully.";

    await loadNumber();
  } catch (error) {
    message.textContent = error.shortMessage || error.message;
  }
}

async function loadNumber() {
  if (!contract || busy) return;

  try {
    setBusy(true);
    message.textContent = "Reading blockchain data...";

    const number = await contract.getNumber();

    currentNumber.textContent = number.toString();
    message.textContent = "Data updated from the blockchain.";
  } catch (error) {
    message.textContent = error.shortMessage || error.message;
  } finally {
    setBusy(false);
  }
}

async function saveNumber() {
  if (!contract || busy) return;

  const value = numberInput.value.trim();

  if (!/^\d+$/.test(value)) {
    message.textContent = "Enter a whole number that is zero or greater.";
    return;
  }

  try {
    setBusy(true);
    transactionInfo.hidden = true;
    message.textContent = "Please confirm the transaction in MetaMask...";

    const tx = await contract.setNumber(BigInt(value));

    transactionInfo.hidden = false;
    transactionLink.textContent = tx.hash;
    transactionLink.href = `https://sepolia.etherscan.io/tx/${tx.hash}`;

    // This is a local transaction, so there is no public explorer link.
    transactionLink.removeAttribute("href");
    transactionLink.textContent = tx.hash;

    message.textContent = "Transaction submitted. Waiting for confirmation...";

    await tx.wait();

    const updatedNumber = await contract.getNumber();
    currentNumber.textContent = updatedNumber.toString();

    message.textContent = "Transaction confirmed! Number saved.";
    numberInput.value = "";
  } catch (error) {
    message.textContent = error.shortMessage || error.message;
  } finally {
    setBusy(false);
  }
}

if (window.ethereum) {
  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });
}
