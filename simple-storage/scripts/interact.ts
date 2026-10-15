import { network } from "hardhat";

const { ethers } = await network.create();

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const simpleStorage = await ethers.getContractAt(
  "SimpleStorage",
  contractAddress,
);

// Read Current value
const currentNumber = await simpleStorage.getNumber();
console.log("Current number:", currentNumber.toString());

// Update the stored Number
const tx = await simpleStorage.setNumber(200);
await tx.wait();

console.log("Transaction hash:", tx.hash);

// Read updated value
const updateNumber = await simpleStorage.getNumber();
console.log("Updated Number:", updateNumber.toString());
