// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Rewards {
    string public name = "Rewards";
    string public symbol = "REW";
    uint256 public totalSupply = 1000000000000000000000000; // 1 millions tokens
    uint256 decimals = 18;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    // functions

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balances[msg.sender] >= _value, "Insufficient funds");

        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // Function Transfer balance (Third party)

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(balances[_from] >= _value, "Insufficient funds");

        balances[_from] -= _value;
        balances[_to] += _value;
        allowances[msg.sender][_from] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // Approve the transation
    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}
