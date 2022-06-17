const Tether = artifacts.require('Tether');
const Rewards = artifacts.require('Rewards');
const DeBank = artifacts.require('DeBank');

require('chai').use(require('chai-as-promised')).should();

contract ('DeBank', ([owner, costumer]) => {

  // Variables
  let tether, rewards, deBank;

   
  function tokens(n){
    return web3.utils.toWei(n, 'ether')
  }

  // Before
  before(async () => {
    tether = await Tether.new();
    rewards = await Rewards.new();
    deBank = await DeBank.new(tether.address, rewards.address);

    await rewards.transfer(deBank.address, tokens('100000'));

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
})
