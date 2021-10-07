const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    // await for contract to be mined
    await waveContract.deployed()

    // print local address
    console.log("Contract deployed to -- ", waveContract.address)
    
    // notify miners of what we want
    let waveTransaction = await waveContract.wave();

    // wait for it to be mined
    await waveTransaction.wait();

    // wave again
    waveTransaction = await waveContract.wave();
    await waveTransaction.wait();   

    console.log("Done waving!!!")
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