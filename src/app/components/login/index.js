import React from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row
} from 'react-bootstrap'


class Login extends React.Component {

  state = {
    email: '',
    password: ''
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
      <div className=" login-page">
        <Row >
          <div className="logo-block">

          </div>
          <div  className="login-block">
            <form>
              <FormGroup>
                <h2>ENTER YOUR LOGIN <br/> CREDENTIALS</h2>
                <FormControl type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                <FormControl type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
              </FormGroup>
              <Button type="submit">LOGIN</Button>
            </form>
          </div>
        </Row>
      </div>
    )
  }
}

export default connect(state => state)(Login)
