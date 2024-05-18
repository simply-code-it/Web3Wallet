import Web3 from 'web3';

// Configure Web3 to connect to a testnet (e.g., Rinkeby)
const rinkebyProvider = new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d');
const web3 = new Web3(rinkebyProvider);

// Function to create a new Ethereum account
export const createAccount = () => {
  const account = web3.eth.accounts.create();
  return account;
};

// Function to get the balance of an account
export const getBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return web3.utils.fromWei(balance, 'ether');
};

// Function to send a transaction
export const sendTransaction = async (from, to, value, privateKey) => {
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
