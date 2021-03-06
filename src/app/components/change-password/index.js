import React from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  Button,
  Label,
  Input
} from 'reactstrap'

import { updatePassword } from '../../services/sessions'

const disableCopyPaste = {
  onCopy: e => e.preventDefault(),
  onCut: e => e.preventDefault(),
  onPaste: e => e.preventDefault()
};

class ChangePassword extends React.Component {

  state = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    errors: {}
  };

  handleChange = e => {
    const { errors } = this.state;
    this.setState({ [e.target.name]: e.target.value, errors: { ...errors, [e.target.name]: '' } })
  };

  validate = () => {
    const { currentPassword, newPassword, confirmNewPassword } = this.state;
    let hasErrors;
    let errors = {};

    if(!currentPassword) {
      errors.currentPassword = '*required';
      hasErrors = true
    }

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

    updatePassword(currentPassword, newPassword)
      .success(res => {
        this.setState({
            currentPassword: '',
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
      <div className="login-page">
        <div className="logo-block">

        </div>
        <div  className="login-block">
          <form onSubmit={this.handleSubmit} className="form">
            <FormGroup>
              <h2>CHANGE PASSWORD</h2>

              <FormGroup>
                {errors['currentPassword'] && (
                  <Label className="error">
                    {errors['currentPassword']}
                  </Label>
                )}
                <Input
                  type="password"
                  name="currentPassword"
                  placeholder="Your current password"
                  className={ errors['currentPassword'] ? 'error' : '' }
                  onChange={this.handleChange}
                  {...disableCopyPaste} />
              </FormGroup>

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
                  {...disableCopyPaste}/>
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
                  {...disableCopyPaste}/>
              </FormGroup>
            </FormGroup>
            <Button type="submit" color="primary" disabled={objectHasAnyProps(errors)} >CHANGE</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ChangePassword)
