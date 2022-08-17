import React, { useState, useEffect } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Product from '../components/Product';

import { fetchCoffee } from '../lib/api';


const App = () => {

  // This will fetch the users' public key (wallet address) from any wallet supported
  const { publicKey } = useWallet();
  const isOwner = '6Ta7UptqENMEnQxhbFsDWCp8gSBQZCZssQzLcNqt5gn6';
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        });
    }
    fetchCoffee()

  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <br/>
      <img src="https://media.giphy.com/media/8KU9sgfB4rmL15FR1D/giphy.gif" alt="kindness" />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );


  return (
    <div className="App">
      <div className="container">
      <br/><br/>
        <header className="header-container">
          <div className="title-container">
          <img className="mainlogo" src={"https://solana.com/src/img/branding/solanaLogo.png"} />
            <h2 className="header">Kindness Kiosk</h2>
          </div>
        </header>
        <p className="sub-text">
            Solana Kindness Kiosk is a boilerplate for social service organisations or charities to easily receive donations on the Solana network.</p>
        <main>
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>
        <p className="sub-text">
            This project current works with Solana devnet. <a href='https://github.com/therealbryanho/solana-kindness-kiosk' target="_blank" >Github</a>
            <br/>
            </p>
            <div>Powered By</div>
            <img className="footerlogo" src={"https://solanapay.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolanapay-logo.e34e7b7f.svg&w=256&q=75"} /><br/>
      </div>
    </div>
  );
};

export default App;
