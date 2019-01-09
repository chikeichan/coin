var FertilizerCoin = artifacts.require("./FertilizerCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(FertilizerCoin);
};