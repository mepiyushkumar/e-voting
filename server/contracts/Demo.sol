// Solidity program to demonstrate
// how to create a contract
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.23 < 0.9.0;

// Creating a contract
contract Demo {
	
// Declaring variable 

uint data;
function updateData(uint x)external{
    data=x;
}

function readData() external view returns(uint){
    return data;

}

}