import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

import { forgotPassword } from '../../services/sessions'

class ForgotPass extends React.Component {

  state = {
    emailAddress: '',
    errors: {}
  };

  handleChange = e => {
    const { errors } = this.state;
    this.setState({ [e.target.name]: e.target.value, errors: { ...errors, [e.target.name]: '' } })
  };

  validate = () => {
    const { emailAddress } = this.state;
    let hasErrors;
    let errors = {};

    if(!emailAddress) {
      errors.currentPassword = '*required';
      hasErrors = true
    }
    this.setState({ errors });
    return hasErrors
  };

  handleSubmit = e => {
    e.preventDefault();
    const { emailAddress } = this.state;
    const hasErrors = this.validate();

    if (hasErrors) return;

    forgotPassword(emailAddress)
      .success(res => {
        this.setState({
            emailAddress: ''
        });
        browserHistory.push('/login');
      })
      .error(res => {
        this.setState({ errors: { emailAddress: res.error } })
      })
  };


  render() {
    const {errors} = this.state;

    return(
      <div style={{textAlign: 'center'}} className="login-page">
        <div className="logo-block">

        </div>
        <div  className="login-block">
          <form onSubmit={this.handleSubmit} className="form">
            <FormGroup>
              <h2>PASSWORD RECOVERY</h2>

              <FormGroup>
                {errors['emailAddress'] && (
                  <Label>
                    {errors['emailAddress']}
                  </Label>
                )}
                <Input
                  type="text"
                  name="emailAddress"
                  placeholder="Plase enter registered email"
                  className={ errors['emailAddress'] ? 'error' : '' }
                  onChange={this.handleChange} />
              </FormGroup>
            </FormGroup>
            <Button type="submit" color="primary" disabled={!this.state.emailAddress} >SEND LINK</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ForgotPass)
