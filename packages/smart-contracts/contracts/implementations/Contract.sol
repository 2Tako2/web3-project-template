// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../interfaces/IContract.sol";

/**
 * This is a contract which extends the IContract interface
 */
contract Contract is IContract {
    uint256 public foo;

    constructor() {
        foo = 0;
    }

    function aFunction(uint256 bar) external {
        foo += bar;
    }
}
