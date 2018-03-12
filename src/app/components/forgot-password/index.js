import React from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap'

import { updatePassword } from '../../services/sessions'

class ForgotPass extends React.Component {

  state = {
    emailAddress: '',
    errors: {}
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
              <h2>PASSWORD RECOVERY</h2>

              <FormGroup>
                {errors['emailAddress'] && (
                  <ControlLabel>
                    {errors['emailAddress']}
                  </ControlLabel>
                )}
                <FormControl
                  type="text"
                  name="emailAddress"
                  placeholder="Plase enter registered email"
                  className={ errors['currentPassword'] ? 'error' : '' }
                  onChange={this.handleChange} />
              </FormGroup>
            </FormGroup>
            <Button type="submit">SEND LINK</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ForgotPass)
