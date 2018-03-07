import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Button,
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'
import Logo from './kora_logo.svg';


function Navigation() {


  return (
    <Navbar className='navigation'>
      <Nav className="items">
        <NavItem href="/transactions">TRANSACTIONS</NavItem>
        <div className="vertical-line" />
        <NavItem href="/farmers">FARMER MANAGEMENT</NavItem>
        <div className="vertical-line" />
        <NavItem href="/agents">AGENT MANAGEMENT</NavItem>
        <div className="vertical-line" />
        <NavItem href="/users">USERS</NavItem>
        <div className="vertical-line" />
        <NavItem href="/banck_accounts">BANK ACCONTS</NavItem>
        <div className="vertical-line" />
        <NavItem href="/money_transfer">MONEY TRANSFER</NavItem>
        <div className="vertical-line" />
        <NavItem href="/payroll">PAYROLL</NavItem>
      </Nav>
    </Navbar>
  )
}

export default Navigation;
