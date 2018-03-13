import React from 'react';
import {connect} from 'react-redux'
import {
  Col,
  Row,
  Button
} from 'reactstrap'

import {deleteUser, fetchOne, clearSelected} from './actions';

class UserDelete extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {
    const { selected: user } = this.props.users;
    return (
      <div className="layout">
        <br/><br/>
        <Row>
          <Col md="12">
            <h1 className="text-center">YOU ARE ABOUT TO DELETE USER</h1>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <h5 className="text-center">{`${user.firstName} ${user.lastName}`}</h5>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <h5 className="text-center">{user.emailAddress}</h5>
          </Col>
        </Row>
        <br/>
        <Button color="primary" onClick={deleteUser.bind(this, user.id)}>DELETE</Button>
      </div>
    )
  }
}

export default connect(state => state)(UserDelete)
