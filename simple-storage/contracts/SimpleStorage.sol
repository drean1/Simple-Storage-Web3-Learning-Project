// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

contract SimpleStorage {
    uint256 private number;

    function setNumber(uint _number) public {
        number = _number;
    }
    function getNumber() public view returns 
(uint256) {
    return number;
    }
}   