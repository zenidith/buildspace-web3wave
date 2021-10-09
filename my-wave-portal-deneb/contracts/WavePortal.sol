pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    
    constructor() {
        console.log("hey yo yeah~");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved and now totalWaves is %s", msg.sender, totalWaves);
    }
}