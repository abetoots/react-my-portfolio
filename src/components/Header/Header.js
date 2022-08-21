import React from 'react';
import './Header.scss';
import ContactMe from '../ContactMe/ContactMe';

const Header = (props) => {
  return (
    <header className="Header">
      <ContactMe />
      <h1 style={{ color: 'white' }}> Hi. This is Abe Suni M. Caymo's Portfolio</h1>
    </header>
  );
};

export default Header;
