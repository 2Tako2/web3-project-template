import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { ethers, deployments } = hre;
	const { deploy } = deployments;

	const [deployer] = await ethers.getSigners();

	await deploy("Contract", {
		from: deployer.address,
		log: true,
		contract: "Contract",
		args: [],
	});
};
export default func;
func.tags = ["testbed", "_contract"];
