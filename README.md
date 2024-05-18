# My Ethereum Wallet

My Ethereum Wallet is a web application that allows users to create, manage, and interact with Ethereum accounts. Users can sign in, create new accounts, view their ERC-20 token balances, send tokens to other addresses, and switch between different Ethereum networks.

## Features

- User authentication: Sign in or create a new account.
- Ethereum account management: Create and manage multiple Ethereum accounts.
- Network selection: Switch between Ethereum mainnet and testnets.
- ERC-20 token management: View and manage ERC-20 tokens.
- Transaction functionality: Send tokens to other Ethereum addresses.
- Real-time balance updates: Regularly update token balances.

## Technologies Used

- Frontend:
  - React.js
  - Web3.js
- Backend:
  - Node.js
  - Express.js
  - MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-ethereum-wallet.git
   cd my-ethereum-wallet

2. Install dependencies for both the frontend and backend:

# Frontend
    - cd my-ethereum-wallet
    - npm install

# Backend
    - cd server
    - npm install

3. Set up environment variables:

    - Create a .env file in the root directory of your backend project and add the following:
    - MONGODB_URI=mongodb://localhost:27017/myethwalletINFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID

4. Start the backend server:
    - cd server
    - npm start

5. Start the frontend development server:
    - cd my-ethereum-wallet
    - npm start


## API Endpoints

- **POST /signin**: Sign in or create a new user account.
- **POST /createAccount**: Create a new Ethereum account for the user.
- **GET /tokens/:address**: Fetch all ERC-20 tokens for a given Ethereum address.

## Components

- **SignIn**: User authentication form.
- **AccountCreationForm**: Form to create a new Ethereum account.
- **AccountList**: List of user accounts.
- **AccountDetails**: Display details of a selected account, including balance and tokens.
- **TransactionForm**: Form to send tokens to another address.
- **NetworkSelector**: Dropdown to select the Ethereum network.

## How to Use

1. **Sign In**: Open the application and sign in with your username and password. If you don't have an account, it will be created for you.
2. **Create Account**: After signing in, you can create a new Ethereum account.
3. **Select Network**: Use the network selector to choose between Ethereum mainnet and testnets.
4. **View Tokens**: View the list of ERC-20 tokens associated with your account.
5. **Send Tokens**: Use the transaction form to send tokens to another Ethereum address.
6. **Balance Updates**: The balance and token information will be updated every 5 minutes.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

Feel free to customize this README file as needed to better fit your project's specifics and additional features.


