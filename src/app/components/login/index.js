import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import {
  FormGroup,
  Input,
  Button,
  Label,
} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/fontawesome-free-solid'

import { login } from '../../actions/sessions'
import { handleChange } from './actions'

class Login extends React.Component {

  state = {
    passwordIsVisible: false
  };

  togglePassword = () => {
    this.setState({ passwordIsVisible: !this.state.passwordIsVisible })
  };

  render() {
    const { passwordIsVisible } = this.state;
    const { global: { isLoading }, loginForm: { emailAddress, password, errors } } = this.props;

    return(
      <div className="login-page">
        <div className="logo-block">

        </div>
        <div  className="login-block">
          <form onSubmit={login} className="form">
            <h2>ENTER YOUR LOGIN <br/> CREDENTIALS</h2>
            <FormGroup>
              {errors['emailAddress'] && (
                <Label className="error">{errors['emailAddress']}</Label>
              )}
              <Input type="text" name="emailAddress" placeholder="Email" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              {errors['password'] && (
                <Label className="error">{errors['password']}</Label>
              )}
              <Input type={passwordIsVisible ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange}/>
              <div className="toggle-password">
                <FontAwesomeIcon icon={faEye} onMouseDown={this.togglePassword} onMouseUp={this.togglePassword}/>
              </div>
            </FormGroup>
            <Button type="submit" color="primary" disabled={!emailAddress || !password || isLoading}>LOGIN</Button>
            <br />
            <Link to="/forgot_password">Forgot Password?</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Login)
