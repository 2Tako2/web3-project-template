import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-ethers";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	accounts.map((account) => console.log(account.address));

	await hre.network.provider.send("evm_setIntervalMining", [5000]);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.17",
		settings: {
			optimizer: {
				enabled: true,
				runs: 500,
			},
		},
	},
	paths: { sources: "contracts/" },
	networks: {
		hardhat: {
			allowUnlimitedContractSize: true,
		},
		goerli: {
			url: process.env.GOERLI_URL || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
			gas: 2100000,
			gasPrice: 8000000000,
			saveDeployments: true,
		},
		// mumbai: {
		// 	url: process.env.MUMBAI_RPC_URL,
		// 	accounts:
		// 		process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		// 	saveDeployments: true,
		// },
		// polygon: {
		// 	url: process.env.POLYGON_RPC_URL,
		// 	accounts:
		// 		process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		// 	saveDeployments: true,
		// },
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
	},
	etherscan: {
		apiKey: process.env.POLYGONSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: 0,
		alice: 1,
		bob: 2,
		carol: 3,
		drake: 4,
	},
	typechain: {
		outDir: "typechain",
		target: "ethers-v5",
	},
};

export default config;
