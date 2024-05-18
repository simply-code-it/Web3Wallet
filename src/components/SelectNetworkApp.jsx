import React, { useState, useEffect } from 'react';
import NetworkSelector from './NetworkSelector';
import { initializeWeb3, createAccount, getBalance, sendTransaction, isWeb3Initialized } from '../services/allweb3.js';

const SelectNetworkApp = () => {
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState({});
  const [limit, setLimit] = useState(false);
  const [balance, setBalance] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('https://mainnet.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d');

  useEffect(() => {
    initializeWeb3(network);
  }, [network]);

  const handleCreateAccount = () => {
    let object = JSON.parse(localStorage.getItem('accounts')) || {};
    if(Object.entries(object).length >= 5) {
        setLimit(true);
        setAccounts(object);
        return;
    }
    const newAccount = createAccount();

    object[newAccount.address]= newAccount.privateKey;
    setAccounts(object);

    localStorage.setItem('accounts', JSON.stringify(object));

    setAccount(newAccount);
  };

  const handleGetBalance = async (account) => {
    if (account) {
      const balance = await getBalance(account.address);
      setBalance(balance);
    }
  };

  const handleSendTransaction = async () => {
    if (account && recipient && amount) {
      const receipt = await sendTransaction(account.address, recipient, amount, account.privateKey);
      console.log('Transaction Receipt:', receipt);
    }
  };

  return (
    <div>
      {/* <NetworkSelector selectedNetwork={network} onSelectNetwork={setNetwork} /> */}
      <button onClick={handleCreateAccount}>Create New Account</button>
      {limit && <p>You can not create more than five accounts</p>}
      {/* {account && (
        <div>
          {Object.entries(JSON.parse(localStorage.getItem('accounts'))).map(item => <div>
          <p>{`Account: ${item[0]}`}</p>
          <p className='password'>{`Private Key: ${item[1]}`} 
          </p>
          <button onClick={() => handleGetBalance(item[0])}>Get Balance</button>
          {balance && <p>Balance: {balance} ETH</p>} 
          </div>)}
        </div>
      )} */}

      <div>
        <h1>Your Ethereum Mainnet Accounts</h1>
        <div>
          {Object.entries(accounts).map(item => <div key = {item[0]}>
          <p>{`Account: ${item[0]}`}</p>
          <p className='password'>{`Private Key: ${item[1]}`} 
          </p>
          <button onClick={() => handleGetBalance(item[0])}>Get Balance</button>
          {balance && <p>Balance: {balance} ETH</p>} 
          </div>)}
        </div>
      </div>




      {/* <div>
        <h2>Send Transaction</h2>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleSendTransaction}>Send</button>
      </div> */}
    </div>
  );
};

export default SelectNetworkApp;
