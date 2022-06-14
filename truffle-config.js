// requiring the modules
require("babel-register");
require("babel-polyfill");

// configs
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*", // connect on any network id
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/truffle_abis",
  compilers: {
    // solidity compiler
    solc: {
      version: "^0.8.6",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
