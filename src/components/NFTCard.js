import React from 'react';
import './NFTCard.css';
import assets from './../assets';
import Divider from './Divider';

const NFTCard = () => {
  return (
    <div className="nft-card">
      <div className="nft-img-container">
        <img src={assets.equilibrium} className="nft-img" alt="equilibrium" />
        <div className="nft-img-overlay"></div>
        <img src={assets.view} className="nft-icon-view" alt="icon view" />
      </div>
      <h3 className="nft-title">Equilibrium #3429</h3>
      <p className="nft-desc">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="nft-info">
        <p className="nft-price">
          <img src={assets.ethereum} alt="ethereum" /> 0.041 ETH
        </p>
        <p className="nft-date">
          <img src={assets.clock} alt="clock" />3 days left
        </p>
      </div>
      <Divider />
      <div className="nft-creator">
        <img src={assets.avatar} alt="creator" />
        <div className="creator-name">
          Creation of&nbsp;
          <span className="nft-creator-name">Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
