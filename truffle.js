var HDWalletProvider = require('truffle-hdwallet-provider');

// Be sure to match this mnemonic with that in Ganache!
var mnemonic =
  'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

module.exports = {
  compilers: {
    solc: {
      version: '^0.4.25' // A version or constraint - Ex. "^0.5.0"
      // Can also be set to "native" to use a native solc
    }
  },
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/', 0, 10);
      },
      network_id: '*',
      // gas: 670000
      gas: 4712388

      // gas: 9999999
    }
  }
};
