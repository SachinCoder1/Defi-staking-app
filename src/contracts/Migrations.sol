// SPDX-License-Identifier: MIT

pragma solidity ^0.5.0;


contract Migrations {
    address public owner;
    uint256 public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    // Modifier for only owner
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // Functions

    function setCompleted(uint256 completed) public onlyOwner {
        last_completed_migration = completed;
    }

    function update(address newAddress) public onlyOwner {
        Migrations updated = Migrations(newAddress);
        updated.setCompleted(last_completed_migration);
    }
}
