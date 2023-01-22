const Demovot=artifacts.require("./contracts/Votingcon.sol");

module.exports=function(deployer){
    deployer.deploy(Demovot);
}