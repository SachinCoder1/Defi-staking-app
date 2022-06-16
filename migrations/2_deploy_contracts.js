const Tether = artifacts.require('Tether');
const Rewards = artifacts.require('Rewards');
const DeBank = artifacts.require('DeBank');

module.exports = async function(deployer) {
    await deployer.deploy(Tether);
    await deployer.deploy(Rewards);
    await deployer.deploy(DeBank);

};