const Migration = artifacts.require('Migrations');

module.exports = function deployer(){
    deployer.deploy(Migration);
};