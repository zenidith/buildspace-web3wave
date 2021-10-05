const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    // await for contract to be mined
    await waveContract.deployed()

    // print local address
    console.log("Contract deployed to -- ", waveContract.address)

}

// async run main file and catch errors
const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();