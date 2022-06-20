const Tether = artifacts.require('Tether');
const Rewards = artifacts.require('Rewards');
const DeBank = artifacts.require('DeBank');

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Tether);
    const tether = await Tether.deployed();

    await deployer.deploy(Rewards);
    const rewards = await Rewards.deployed();
    
    
    await deployer.deploy(DeBank, rewards.address, tether.address);
    const debank = await DeBank.deployed();

    await rewards.transfer(debank.address, '1000000000000000000000000');

    await tether.transfer(accounts[1], '100000000000000000000')


};