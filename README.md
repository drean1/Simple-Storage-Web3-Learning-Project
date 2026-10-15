# Simple Storage — Web3 Learning Project

A beginner-friendly Web3 project built to learn smart contract development, blockchain interaction, and wallet integration using Solidity, Hardhat, and Ethers.js.

## Overview

Simple Storage is a decentralized application (dApp) that allows users to store and retrieve a number on a local Ethereum-compatible blockchain through a web interface.

This project is part of my hands-on learning journey into Web3 development and smart contract fundamentals.

## Features

- **Smart Contract:** Store and retrieve a number using Solidity.
- **Wallet Integration:** Connect a MetaMask wallet to the application.
- **Blockchain Transactions:** Update stored values through on-chain transactions.
- **Transaction Confirmation:** Wait for blockchain transaction confirmation before updating the displayed value.
- **Local Blockchain:** Develop and test using a local Hardhat network.

## Tech Stack

- Solidity
- Hardhat
- TypeScript
- JavaScript
- Ethers.js
- HTML & CSS
- MetaMask
- Node.js and npm

## Project Structure

```text
simple-storage/
├── contracts/
│   └── SimpleStorage.sol
├── scripts/
│   ├── deploy.ts
│   └── interact.ts
├── test/
│   └── SimpleStorage.ts
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── hardhat.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Git
- MetaMask browser extension
- VS Code or another code editor

### 1. Clone the Repository

```bash
git clone https://github.com/drean1/Simple-Storage-Web3-Learning-Project.git
cd Simple-Storage-Web3-Learning-Project/simple-storage
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npx hardhat build
```

### 4. Start the Local Blockchain

Open a terminal and run:

```bash
npx hardhat node
```

Keep this terminal running while using the application.

### 5. Deploy the Smart Contract

Open another terminal in the `simple-storage` directory:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

Copy the deployed contract address and update the contract address configuration in `frontend/app.js` before using the frontend.

If you use `scripts/interact.ts`, update its contract address as well.

### 6. Configure MetaMask

Add a custom network to MetaMask using the following settings:

| Setting | Value |
|---|---|
| Network Name | Hardhat Local |
| RPC URL | `http://127.0.0.1:8545` |
| Chain ID | `31337` |
| Currency Symbol | ETH |

For local testing, import a test account provided by Hardhat if needed.

### 7. Run the Frontend

Open `frontend/index.html` using the VS Code Live Server extension, or serve the frontend using another local HTTP server.

Connect MetaMask, select the Hardhat Local network, and interact with the smart contract through the interface.

## Testing

Run the automated smart contract tests:

```bash
npx hardhat test
```

The tests cover the initial stored value and updating the stored number.

## Learning Objectives

Through this project, I am learning how to:

- Write and compile smart contracts using Solidity.
- Deploy contracts to a local blockchain.
- Interact with contracts using Ethers.js.
- Connect a browser wallet using MetaMask.
- Understand blockchain transactions and confirmation flows.
- Test smart contract functionality using Hardhat.

## Security Notes

- This project is intended for educational and local development purposes.
- Never use Hardhat's publicly known test private keys on mainnet or with real funds.
- Never commit private keys, seed phrases, passwords, or other sensitive credentials to GitHub.
- Restarting the local Hardhat node resets its blockchain state, so the contract must be redeployed.

## Future Improvements

- Add smart contract events to track stored-value updates.
- Display transaction hashes and event logs in the frontend.
- Improve frontend validation and error handling.
- Add deployment and interaction support for a public testnet.

## Author

**Andrean**

GitHub: [@drean1](https://github.com/drean1)

Portfolio: [portfolio-andrean.netlify.app](https://portfolio-andrean.netlify.app)
