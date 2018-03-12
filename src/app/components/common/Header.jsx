import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import { Row, Button } from 'reactstrap'
import Logo from './kora_logo.svg';

import { logout } from '../../actions/sessions'

class Header extends React.Component {

  render() {
    const { currentUser } = this.props;

    return (
      <header>
        <img src={Logo} className="logo" />
        {currentUser.id && (
          <div className="current-user">
            <div className="full-name">
              <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
              <div className="vertical-line" />
              <p>
                <Link to="/change-password">Change Password</Link>
              </p>
            </div>
            <Button className="logout" onClick={logout}>LOGOUT</Button>
          </div>
        )}
      </header>
    )
  }
}

export default connect(state=>state)(Header);
