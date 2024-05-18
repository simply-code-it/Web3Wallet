import Web3 from 'web3';

let web3;

// Function to initialize Web3 with a given network
export const initializeWeb3 = (networkUrl) => {
  web3 = new Web3(new Web3.providers.HttpProvider(networkUrl));
};

// Function to create a new Ethereum account
export const createAccount = () => {
  if (!web3) {
    throw new Error('Web3 is not initialized');
  }
  const account = web3.eth.accounts.create();
  return account;
};

// Function to get the balance of an account
export const getBalance = async (address) => {
  if (!web3) {
    throw new Error('Web3 is not initialized');
  }
  const balance = await web3.eth.getBalance(address);
  return web3.utils.fromWei(balance, 'ether');
};

// Function to send a transaction
export const sendTransaction = async (from, to, value, privateKey) => {
  if (!web3) {
    throw new Error('Web3 is not initialized');
  }
  const tx = {
    from,
    to,
    value: web3.utils.toWei(value, 'ether'),
    gas: 21000, // Standard gas limit for a simple ETH transfer
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return receipt;
};

// Function to check if Web3 is initialized
export const isWeb3Initialized = () => {
  return web3 !== undefined;
};

export default web3;
