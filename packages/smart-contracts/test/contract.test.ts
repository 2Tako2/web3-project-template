import { ethers, deployments } from "hardhat";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";
import { Contract } from "typechain";

use(chaiAsPromised);

describe("Contract Testing", () => {
	let Contract: Contract;

	beforeEach(async () => {
		await deployments.fixture("_contract");
		Contract = await ethers.getContract("Contract");
	});

	describe("Initialize Contract", async () => {
		it("should initialize foo as zero", async () => {
			expect(await Contract.foo()).to.eq(BigNumber.from(0));
		});
	});

	describe("aFunction", () => {
		const INCREMENT = BigNumber.from(5);

		it("should increment foo by bar", async () => {
			const initial = await Contract.foo();
			await Contract.aFunction(INCREMENT);
			const final = await Contract.foo();
			expect(initial.add(INCREMENT)).to.eq(final);
		});
	});
});
