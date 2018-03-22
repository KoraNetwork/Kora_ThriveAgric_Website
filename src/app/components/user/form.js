import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Button,
  FormFeedback
} from 'reactstrap'
import {
  fetchOne,
  handleChange,
  submitUser,
  clearSelected
} from './actions';

const leftColProps = {
  md: { size:3, offset:3 },
  style: { display:'flex',alignItems: 'center' }
};

class UserForm extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    if (id) fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {

    const { global: {isLoading}, users: { selected: user }, router } = this.props;

    return(
      <div className="layout">
        <form onSubmit={submitUser} className="form" autoComplete="off">
          <h2 style={{marginTop: 30}}>{user.id ? "USER DETAIL" : "CREATE USER"}</h2>
          {user.id && (
            <Row style={{marginTop: 30}}>
              <Col {...leftColProps}>
                <Label>ID</Label>
              </Col>
              <Col md={3}>
                {user.id}
              </Col>
            </Row>
          )}
          <Row style={ user.id ? {} : {marginTop: 30}}>
            <Col {...leftColProps}>
              <Label>Email address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="emailAddress" value={user.emailAddress} onChange={handleChange} className={user.errors['emailAddress'] ? 'error' : ''} />
                <FormFeedback className="error">{user.errors['emailAddress']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>First Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="firstName" value={user.firstName} onChange={handleChange} className={user.errors['firstName'] ? 'error' : ''} />
                <FormFeedback className="error">{user.errors['firstName']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Last Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="lastName" value={user.lastName} onChange={handleChange} className={user.errors['lastName'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>User Type</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="userType" value={user.userType} onChange={handleChange} className={user.errors['userType'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row style={{justifyContent:'center'}}>
            <Button color="primary" type="submit">SUBMIT</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(UserForm)
