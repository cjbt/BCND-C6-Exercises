var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic =
  'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/', 0, 50);
      },
      network_id: '*',
      // gas: 4712388
      // gas: 9999999
      gas: 6721975
    }
  },
  compilers: {
    solc: {
      version: '^0.4.25'
    }
  }
};

// 20000000000;
// 1471238800000000000;
