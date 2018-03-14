import React from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  Button,
  Label,
  Input
} from 'reactstrap'

import { restorePassword } from '../../services/sessions'

class RestorePassword extends React.Component {

  state = {
    newPassword: '',
    confirmNewPassword: '',
    errors: {}
  };

  handleChange = e => {
    const { errors } = this.state;
    this.setState({ [e.target.name]: e.target.value, errors: { ...errors, [e.target.name]: '' } })
  };

  validate = () => {
    const { newPassword, confirmNewPassword } = this.state;
    let hasErrors;
    let errors = {};

    if(!newPassword) {
      errors.newPassword = '*required';
      hasErrors = true
    }

    if(newPassword && !newPassword.isValidPassword()) {
      errors.newPassword = 'Password must contain:\n• at least 8 characters\n• at least one upper and one lower character\n• at least one number and special character\n(such as _*&^%$#@!-.<>?/)';
      hasErrors = true
    }

    if(!confirmNewPassword) {
      errors.confirmNewPassword = '*required';
      hasErrors = true
    }

    if(newPassword !== confirmNewPassword) {
      errors.confirmNewPassword = 'passwords do not match';
      hasErrors = true
    }

    this.setState({ errors });
    return hasErrors
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentPassword, newPassword } = this.state;
    const hasErrors = this.validate();

    if (hasErrors) return;

    restorePassword(newPassword, this.props.params.token)
      .success(res => {
        this.setState({
            newPassword: '',
            confirmNewPassword: ''
        })
      })
      .error(res => {
        this.setState({ errors: { currentPassword: res.error } })
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
              <h2>KORA PASSWORD RESET</h2>

              <FormGroup>
                {errors['newPassword'] && (
                  <Label className="error" style={{whiteSpace: 'pre-wrap',textAlign: 'left'}}>
                  {errors['newPassword']}
                  </Label>
                )}
                <Input
                  type="password"
                  name="newPassword"
                  placeholder="Please enter new password"
                  className={ errors['newPassword'] ? 'error' : '' }
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                {errors['confirmNewPassword'] && (
                  <Label className="error">
                    {errors['confirmNewPassword']}
                  </Label>
                )}
                <Input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm new password"
                  className={ errors['confirmNewPassword'] ? 'error' : '' }
                  onChange={this.handleChange}
                  />
              </FormGroup>
            </FormGroup>
            <Button type="submit" color="primary" disabled={!this.state.newPassword || !this.state.confirmNewPassword} >RESET</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(RestorePassword)
