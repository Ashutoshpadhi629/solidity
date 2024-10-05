// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public number;

    function set(uint256 _number) public {
        number = _number;
    }
}