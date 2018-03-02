import React from 'react';
import MainDetails from './MainDetails.js';
import MainArea from './MainArea.js';

const Header = () => (
  <div>
    <header className="mainDetails">
      <h1 className="App-title"></h1>
      <MainDetails />
      <MainArea />
    </header>
  </div>
);

export default Header;
