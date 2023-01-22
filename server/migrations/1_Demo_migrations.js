const Demo=artifacts.require("./contracts/Demo.sol");

module.exports=function(deployer){
    deployer.deploy(Demo);
}