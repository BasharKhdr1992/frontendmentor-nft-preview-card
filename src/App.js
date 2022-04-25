import React from 'react';
import './App.css';
import NFTCard from './components/NFTCard';
import Appendix from './components/Appendix';

const App = () => {
  return (
    <div className="wrapper">
      <NFTCard />
      <Appendix />
    </div>
  );
};

export default App;
