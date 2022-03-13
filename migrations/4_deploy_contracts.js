var TestDeploy = artifacts.require("./TestDeploy.sol");

module.exports = function(deployer) {
  deployer.deploy(TestDeploy);
};
  