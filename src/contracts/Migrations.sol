// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor(){
        owner = msg.sender;
    }


    // Modifier for only owner
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }


    // Functions

    function setCompleted(uint completed) public onlyOwner {
        last_completed_migration = completed;
    }

    function update(address newAddress) public onlyOwner {
        Migrations updated = Migrations(newAddress);
        updated.setCompleted(last_completed_migration);
    }
}