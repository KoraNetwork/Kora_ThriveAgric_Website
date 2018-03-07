import React from 'react';
import { Link } from 'react-router';
import { Row, Button } from 'react-bootstrap'
import Logo from './kora_logo.svg';

function Header() {
  return (
    <header>
      <img src={Logo} className="logo" />
      <div className="current-user">
        <div className="full-name">
          <p>Ben Gaben</p>
          <div className="vertical-line" />
          <p>Chenge Password</p>
        </div>
        <Button className="logout">LOGOUT</Button>
      </div>
    </header>
  )
}

export default Header;
