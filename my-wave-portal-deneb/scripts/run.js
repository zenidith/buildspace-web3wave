const main = async() => {
    const waveContractFactory = await hre.ethers.getContractFactory("wavePortal");
    const waveContract = await waveContractFactory.deploy();
}