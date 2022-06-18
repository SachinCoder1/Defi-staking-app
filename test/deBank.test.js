const Tether = artifacts.require('Tether');
const Rewards = artifacts.require('Rewards');
const DeBank = artifacts.require('DeBank');

require('chai').use(require('chai-as-promised')).should();

contract ('DeBank', ([owner, costumer]) => {

  // Variables
  let tether, rewards, deBank;

  
  // To convert in Wei
  function tokens(n){
    return web3.utils.toWei(n, 'ether')
  }

  // Before
  before(async () => {
    tether = await Tether.new();
    rewards = await Rewards.new();
    deBank = await DeBank.new(tether.address, rewards.address);

    // Rewards transfer
    await rewards.transfer(deBank.address, tokens('100000'));
    
    // Tether transfer
    await tether.transfer(costumer, tokens('1'), {from:owner})
  })


  // Test Tether smart contract
  describe("Mock Tether deployment", async ()=> {
    it("matches name successfully", async () => {
        const name = await tether.name();
        assert.equal(name, "Tether"); 
    })
  })


  // Test Reward smart contract
  describe("Mock Rewards deployemnt", async () => {
    it("Matches name successfully", async ()=>{
         const name = await rewards.name();
         const symbol = await rewards.symbol();
         assert.equal(name, "Rewards");
         assert.equal(symbol, "REW");
    })
  })


  //  Test DeBank Smart Contract
  describe("Debank Deployment", async ()=> {
    it("Matches name successfully", async ()=> {
      const name = await deBank.name();
      assert.equal(name, "DeBank")
    })

    it("contract has tokens", async ()=> {
      const balance = await rewards.balances(deBank.address)
      assert.equal(balance, tokens('100000'))

    })
  })
})
