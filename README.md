# Smart Contract DApp

This is a decentralized application (DApp) that interacts with a smart contract deployed on the Ethereum blockchain. The DApp allows you to perform multiplication and subtraction operations by calling functions on the smart contract.

## Smart Contract

The smart contract code is located in the `BipulContract.sol` file. It provides two functions: `multiply` and `subtract`. These functions perform multiplication and subtraction operations on two input numbers, respectively. The result of each operation is stored in the `result` variable.

To use this smart contract, make sure you have an Ethereum development environment set up. You can deploy the contract using tools like Remix or Truffle.

## App.js

The `App.js` file contains the frontend code for the React DApp. It provides a user interface that allows you to enter two numbers and perform multiplication or subtraction operations. The DApp uses the Ethereum provider and the contract's ABI to interact with the smart contract.

To run the DApp locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Update the contract address and ABI in the `App.js` file with your deployed contract details.
4. Start the development server: `npm start`

Make sure you have MetaMask installed in your browser and are connected to the appropriate Ethereum network.

## Usage

1. Enter the first number in the "Number 1" input field.
2. Enter the second number in the "Number 2" input field.
3. Click the "Multiply" button to perform the multiplication operation. The result will be displayed below.
4. Click the "Subtract" button to perform the subtraction operation. The result will be displayed below.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
# DApp
