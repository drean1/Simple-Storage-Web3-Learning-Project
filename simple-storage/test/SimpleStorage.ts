import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("SimpleStorage", function () {
    it("should start with number 0", async function () {
        const simpleStorage = await ethers.deployContract("SimpleStorage");
        await simpleStorage.waitForDeployment();

        expect(await simpleStorage.getNumber()).to.equal(0n);
    });

it("Should update the number", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.waitForDeployment();

    const tx = await simpleStorage.setNumber(100);

    console.log("Transaction hash:", tx.hash);

    await tx.wait();

    expect(await simpleStorage.getNumber()).to.equal(100n);
    });
});
