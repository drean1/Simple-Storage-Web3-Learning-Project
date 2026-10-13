#My first hands-on Web3 project, built to learn smart contract development using Solidity, Hardhat, and TypeScript.

Features

Store a number on a smart contract.

Read the stored number.

Update the stored number through a blockchain transaction.

Run automated smart contract tests.

Deploy the contract to a local Hardhat blockchain.

Tech Stack

Solidity

Hardhat 3

TypeScript

Ethers.js

Mocha and Chai

Node.js

Smart Contract

SimpleStorage.sol provides two functions:

setNumber(uint256 _number): Updates the stored number.

getNumber(): Returns the stored number.

Getting Started

1. Install dependencies

npm install

2. Compile the smart contract

npx hardhat build

3. Run tests

npx hardhat test

4. Start a local blockchain

npx hardhat node

Keep this terminal running.

5. Deploy to the local blockchain

Open another terminal and run:

npx hardhat run scripts/deploy.ts --network localhost

Copy the contract address printed in the terminal.

Learning Progress

Create a Solidity smart contract

Compile the contract

Write and run automated tests

Deploy to a local Hardhat blockchain

Interact with the deployed contract using a separate script

Build a frontend to interact with the smart contract

Disclaimer

This project is for learning and local development only. It has not been audited and is not intended for production use.
