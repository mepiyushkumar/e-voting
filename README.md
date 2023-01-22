# Eth_Voting #
A blockchain-based E-voting system, created as the Third year project of Keshav Memorial Institute of Technology. Teammates include me, Mallesh , Piyush , Nikhil , Arun.

## What is Ethereum Blockchain?

There are several blockchain platforms that allow developers to create and execute smart contracts. Ethereum (@ https://ethereum.org/) is a global, open-source platform for decentralized applications (dapps). Launched in 2015, Ethereum is among the leading programmable blockchains that you can use it to build new blockchain applications, such as cryptocurrency wallets, financial applications, decentralized markets, and games. Like other blockchains, Ethereum has a native cryptocurrency called Ether (ETH), similar to Bitcoin.

Ethereum consists of:

Ethereum Virtual Machine (EVM): essentially a state machine that allows you to execute codes.

Solidity: a programming language build on top of the EVM for writing smart contracts, to send and receive digital tokens and store states.

Gas: On the Ethereum blockchain, each smart contract is processed by one miner and the resultant block is added to the blockchain. Miners must be rewarded for their efforts, so executing any smart contract on the EVM requires a payment called gas. You need to specify the amount of gas you want to spend for executing any smart contract you create.

## Tech Stack:

* Solidity/Web3 (for writing/connecting the Blockchain contract)

* React.js & Bootstrap (front-end)

* MongoDB/ExpressJS/Node.js (back-end)

# Node.js

Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. It is open-source and cross platform.

npm (originally short for Node Package Manager) is a package manager for the JavaScript and node.js. It consists of a command-line client, also called npm, and a registry of packages.

To install node.js and npm: Goto node.js download site @ https://nodejs.org/en/download/ ⇒ choose "LTS" (Long-Term Support).


## Build Set-up ##

```
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

```

# Truffle Suite

The Truffle Suite allows us to build decentralized applications (dapps) on the Ethereum blockchain. It provides a suite of tools for us to write smart contracts with the solidity language, test the smart contracts and deploy them to the blockchain.

You can install Truffle with npm as follows. Global option is used so that it can be used in many projects.

```
npm install --global truffle
```
Truffle module is installed under "node_modules" sub-directory of node.js installed directory. The executable "truffle.cmd" can be found at the node.js base directory.

Truffle comes with a set of commands, the commonly-used commands are listed below via "truffle help":

```
truffle help
Truffle v5.1.15 - a development framework for Ethereum
Usage: truffle <command> [options]
compile   Compile contract source files
console   Run a console with contract abstractions and commands available
migrate   Run migrations to deploy contracts
test      Run JavaScript and Solidity tests
unbox     Download a Truffle Box, a pre-built Truffle project
version   Show version number and exit
```

# Ganache
Ganache is a local in-memory personal blockchain, which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

To install Ganache: Goto Truffle-Ganache @ https://www.trufflesuite.com/ganache ⇒ Download.

Ganache provides 10 accounts preloaded with 100 fake Ether (ETH). Each account has a unique address and a private key.

# MetaMask Wallet 
MetaMask is a crypto wallet and gateway to blockchain dapps. It is available as a browser extension (for Chrome and Firefox) and as a mobile app. It equips you with a key vault, secure login and token wallet - everything you need to manage your digital assets.

(For Firefox) Select "Settings" ⇒ "Add-ons" ⇒ Search for "MetaMask" ⇒ Select "Meta<ask (Ethereum Browser Extension)" ⇒ "Add to Firefox" ⇒ You will see a "Fox" icon appears on the top-right of navigation bar.
(For Chrome) Goto "Settings" ⇒ "Extensions" ⇒ "Open Chrome Web Store" ⇒ Search for "MetaMask" ⇒ "Add to Chrome" ⇒ You will see a "Fox" icon appears on the top-right of navigation bar.
Other alternative wallets are: EtherWallet...
