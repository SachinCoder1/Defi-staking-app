// requiring the modules
require("babel-register");
require("babel-polyfill");

// configs
module.exports = {
  network: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*", // connect on any network id
    },
  },
  contract_directory: "./src/contracts/",
  contract_build_directory: "./src/truffle_abis",
  compilers: {
    // solidity compiler
    solc: {
      version: "^0.5.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
