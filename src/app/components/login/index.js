import React from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
} from 'react-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/fontawesome-free-solid'

import { login } from '../../actions/sessions'

class Login extends React.Component {

  state = {
    emailAddress: '',
    password: '',
    passwordType: true
  };

   togglePassword = () => {
    this.setState({ passwordType: !this.state.passwordType })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    login(this.state)
  };

  render() {
    return(
      <div className="login-page">
        <div className="logo-block">

        </div>
        <div  className="login-block">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h2>ENTER YOUR LOGIN <br/> CREDENTIALS</h2>
              <FormControl type="text" name="emailAddress" placeholder="Email" onChange={this.handleChange}/>
                <FormControl type={this.state.passwordType ? "password" : "text"} name="password" placeholder="Password" onChange={this.handleChange}/>
                <div className="toggle-password">
                  <FontAwesomeIcon icon={faEye} onMouseDown={this.togglePassword} onMouseUp={this.togglePassword}/>
                </div>
            </FormGroup>
            <Button type="submit">LOGIN</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Login)
