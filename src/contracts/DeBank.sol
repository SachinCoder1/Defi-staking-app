// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;
import './Rewards.sol';
import './Tether.sol';


contract DeBank {
    string public name = "DeBank";
    address public owner;
    Rewards public rewards;
    Tether public tether;

    constructor(Rewards _rewards, Tether _tether){
       rewards = _rewards;
       tether = _tether;
    }
}