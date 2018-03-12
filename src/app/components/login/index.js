import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import {
  FormGroup,
  Input,
  Button,
  Row,
} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/fontawesome-free-solid'

import { login } from '../../actions/sessions'

class Login extends React.Component {

  state = {
    emailAddress: '',
    password: '',
    passwordType: true,
  };

  togglePassword = () => {
    this.setState({ passwordType: !this.state.passwordType })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    login(this.state);
  };

  render() {

    const { currentUser } = this.props;

    return(
      <div className="login-page">
        <div className="logo-block">

        </div>
        <div  className="login-block">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h2>ENTER YOUR LOGIN <br/> CREDENTIALS</h2>
              <Input type="text" name="emailAddress" placeholder="Email" onChange={this.handleChange}/>
              <div className={currentUser.errors ? "error" : "none"}>Invalid email and password combination</div>
              <Input type={this.state.passwordType ? "password" : "text"} name="password" placeholder="Password" onChange={this.handleChange}/>
                <div className="toggle-password">
                  <FontAwesomeIcon icon={faEye} onMouseDown={this.togglePassword} onMouseUp={this.togglePassword}/>
                </div>
            </FormGroup>
            <Button type="submit">LOGIN</Button>
            <br />
            <Link to="/forgot_password">Forgot Password?</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Login)
