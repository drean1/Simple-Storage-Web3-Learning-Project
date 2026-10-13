import { network } from "hardhat";

const { ethers } = await network.create();

const simpleStorage = await ethers.deployContract("SimpleStorage");

await simpleStorage.waitForDeployment();

console.log("simpleStorage deploy to:", await simpleStorage.getAddress());