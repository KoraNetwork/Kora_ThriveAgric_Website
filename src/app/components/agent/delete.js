import React from 'react';
import {connect} from 'react-redux'
import {
  Col,
  Row,
  Button
} from 'reactstrap'

import {deleteAgent, fetchOne, clearSelected} from './actions';

class AgentDelete extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {
    const { selected: agent } = this.props.agents;
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
            <h5 className="text-center">{`${agent.firstName} ${agent.lastName}`}</h5>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12">
            <h5 className="text-center">{agent.emailAddress}</h5>
          </Col>
        </Row>
        <br/>
        <Button color="primary" onClick={deleteAgent.bind(this, agent.id)}>DELETE</Button>
      </div>
    )
  }
}

export default connect(state => state)(AgentDelete)
