var VATCoin = artifacts.require("./VATCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(VATCoin);
};
