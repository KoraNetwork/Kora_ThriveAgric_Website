import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Button,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap'
import Logo from './kora_logo.svg';


function Navigation() {


  return (
    <Navbar className='navigation'>
      <Nav className="items">
        <Link to="/transactions">TRANSACTIONS</Link>
        <div className="vertical-line" />
        <Link to="/farmers">FARMER MANAGEMENT</Link>
        <div className="vertical-line" />
        <Link to="/agents">AGENT MANAGEMENT</Link>
        <div className="vertical-line" />
        <Link to="/users">USERS</Link>
        <div className="vertical-line" />
        <Link to="/banks">BANK ACCONTS</Link>
        <div className="vertical-line" />
        <Link to="/money_transfer">MONEY TRANSFER</Link>
        <div className="vertical-line" />
        <Link to="/payroll">PAYROLL</Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation;
