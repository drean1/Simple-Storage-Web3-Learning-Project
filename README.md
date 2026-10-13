# Simple Storage — Web3 Learning Project

A beginner-friendly Web3 project built to explore smart contract development using **Solidity, Hardhat 3, and TypeScript**.

## Features

- Store a number in a smart contract.
- Read the stored number from the blockchain.
- Update the stored number through a blockchain transaction.
- Run automated smart contract tests.
- Deploy the contract to a local Hardhat blockchain.

## Tech Stack

- **Solidity** — Smart contract development
- **Hardhat 3** — Development, compilation, testing, and deployment
- **TypeScript** — Deployment scripts and automated tests
- **Ethers.js** — Smart contract interaction
- **Mocha & Chai** — Testing
- **Node.js** — JavaScript runtime

## Smart Contract

The `SimpleStorage.sol` contract provides two functions:

| Function | Description |
|---|---|
| `setNumber(uint256 _number)` | Updates the stored number |
| `getNumber()` | Returns the stored number |

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/drean1/Simple-Storage-Web3-Learning-Project.git
cd Simple-Storage-Web3-Learning-Project/simple-storage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the smart contract

```bash
npx hardhat build
```

### 4. Run automated tests

```bash
npx hardhat test
```

### 5. Start a local blockchain

```bash
npx hardhat node
```

Keep this terminal running while using the local blockchain.

### 6. Deploy the contract

Open a second terminal in the `simple-storage` directory and run:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

After deployment, the terminal will display the contract address.

## Learning Progress

- [x] Create a Solidity smart contract
- [x] Compile the contract
- [x] Write and run automated tests
- [x] Deploy to a local Hardhat blockchain
- [ ] Interact with the deployed contract using a separate script
- [ ] Build a frontend to interact with the smart contract

## Disclaimer

This project is for educational and local development purposes only. The smart contract has not been audited and is not intended for production use.
