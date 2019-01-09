require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
const keystore = require('fs').readFileSync('./keystore').toString()

// var oxygenPrivateKey = new Buffer('', "hex")
var oxygenWallet = Wallet.fromV3(keystore, 'distributedworld1');
var oxygenProvider = new WalletProvider(oxygenWallet, "http://localhost:8501");


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    oxygen: {
      provider: oxygenProvider,
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "3",
    },
    // mainnet: {
    //   provider: mainNetProvider,
    //   gas: 4600000,
    //   gasPrice: web3.toWei("20", "gwei"),
    //   network_id: "1",
    // }
  }
};