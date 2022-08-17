# Solana Kindness Kiosk - Solana Summer Camp Hackathon Submission

Solana Kindness Kiosk is a boilerplate for social service organisations or charities to easily receive donations on the Solana network.

# Test the app

Demo app (Solana Devnet): https://solanakindnesskiosk.netlify.app/

Get some devnet SOL from the faucet to test: https://solfaucet.com/

# Development

To get started with this project, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm run dev` to start the project

Important deployment notes:

1) createTransaction.js - change the below line to your wallet address

const sellerAddress = '6Ta7UptqENMEnQxhbFsDWCp8gSBQZCZssQzLcNqt5gn6'

2) createTransaction.js and _app.js - change the beline WalletAdapterNetwork to mainnet-beta if going live 

const network = WalletAdapterNetwork.Devnet;
