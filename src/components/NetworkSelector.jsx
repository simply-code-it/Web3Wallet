import React from 'react';

const NetworkSelector = ({ selectedNetwork, onSelectNetwork }) => {
  const networks = [
    { name: 'Mainnet', url: 'https://mainnet.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
    { name: 'Ropsten', url: 'https://ropsten.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
    { name: 'Rinkeby', url: 'https://rinkeby.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
    { name: 'Goerli', url: 'https://goerli.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
    { name: 'Kovan', url: 'https://kovan.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
    { name: 'sepolia', url: 'https://sepolia.infura.io/v3/17e81d6e7f1544e2af92eef633b8702d' },
  ];

  return (
    <div>
      <label>Select Network:</label>
      <select value={selectedNetwork} onChange={(e) => onSelectNetwork(e.target.value)}>
        {networks.map((network, index) => (
          <option key={index} value={network.url}>{network.name}</option>
        ))}
      </select>
    </div>
  );
};

export default NetworkSelector;
