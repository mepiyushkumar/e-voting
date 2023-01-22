const demo=artifacts.require('./contracts/Demo.sol')


contract('demo' ,()=>{

it('should upgrade' , async()=>{
const x=await demo.new();
await x.updateData(20);
const data=await x.readData();
assert(data.toString()==='20');

 
}); 

});