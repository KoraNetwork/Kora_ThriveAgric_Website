import React from 'react';
import {connect} from 'react-redux'
import {
  Col,
  Row,
  Button
} from 'reactstrap'

import {deleteFarmer, fetchOne} from './actions';

class FarmerDelete extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    fetchOne(id)
  }

  render() {
    const { selected: farmer } = this.props.farmers;
    return (
      <div className="layout">
        <br/><br/>
        <Row>
          <Col md="12">
            <h1 className="text-center">YOU ARE ABOUT TO DELETE FARMER</h1>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <h5 className="text-center">{`${farmer.firstName} ${farmer.lastName}`}</h5>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <h5 className="text-center">{farmer.emailAddress}</h5>
          </Col>
        </Row>
        <br/>
        <Button color="primary" onClick={deleteFarmer.bind(this, farmer.id)}>DELETE</Button>
      </div>
    )
  }
}

export default connect(state => state)(FarmerDelete)
