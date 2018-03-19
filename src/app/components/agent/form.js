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
  submitAgent,
  clearSelected
} from './actions';

const leftColProps = {
  md: { size:3, offset:3 },
  style: { display:'flex',alignItems: 'center' }
};

class AgentForm extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    if (id) fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {
    const { global: {isLoading}, agents: { selected: agent }, router } = this.props;

    return(
      <div className="layout">
        <form onSubmit={submitAgent} className="form" autoComplete="off">
          <h2 style={{marginTop: 30}}>{agent.id ? "AGENT DETAIL" : "CREATE AGENT"}</h2>
          {agent.id && (
            <Row style={{marginTop: 30}}>
              <Col {...leftColProps}>
                <Label>ID</Label>
              </Col>
              <Col md={3}>
                {agent.id}
              </Col>
            </Row>
          )}
          <Row style={ agent.id ? {} : {marginTop: 30}}>
            <Col {...leftColProps}>
              <Label>Email Address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="emailAddress" value={agent.emailAddress} onChange={handleChange} className={agent.errors['emailAddress'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['emailAddress']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Agent First Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="firstName" value={agent.firstName} onChange={handleChange} className={agent.errors['firstName'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['firstName']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Agent Last Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="lastName" value={agent.lastName} onChange={handleChange} className={agent.errors['lastName'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Phone Number</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="phoneNumber" value={agent.phoneNumber} onChange={handleChange} className={agent.errors['phoneNumber'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['phoneNumber']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Phone Status</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                {agent.phoneStatus ? "Active" : "Unconfirmed"}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label></Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Button color="primary">REQUEST CONFIRMATION</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Confirmation Code</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="phoneConfirmationCode" value={agent.phoneConfirmationCode} onChange={handleChange} className={agent.errors['phoneConfirmationCode'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label></Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Button color="primary">CONFIRM PHONE</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="address" value={agent.address} onChange={handleChange} className={agent.errors['address'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Bank Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="bankName" value={agent.bankName} onChange={handleChange} className={agent.errors['bankName'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['bankName']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Bank Routing Number</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="bankRoutingNumber" value={agent.bankRoutingNumber} onChange={handleChange} className={agent.errors['bankRoutingNumber'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['bankRoutingNumber']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Acount Number</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="acountNumber" value={agent.acountNumber} onChange={handleChange} className={agent.errors['acountNumber'] ? 'error' : ''} />
                <FormFeedback className="error">{agent.errors['acountNumber']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Business Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="businessName" value={agent.businessName} onChange={handleChange} className={agent.errors['businessName'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Business Address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="businessAddress" value={agent.businessAddress} onChange={handleChange} className={agent.errors['businessAddress'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Agent Status</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="agentStatus" value={agent.agentStatus} onChange={handleChange} className={agent.errors['agentStatus'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Button color="danger" type="button" onClick={router.push.bind(this, `/agents/${agent.id}/delete`)}>DELETE AGENT</Button>
            </Col>
            <Col md={3}>
              <FormGroup>

              </FormGroup>
            </Col>
          </Row>
          {/*<Row>*/}
            {/*<Col {...leftColProps}>*/}
              {/*<Label>securityQuestions</Label>*/}
            {/*</Col>*/}
            {/*<Col md={3}>*/}
              {/*<FormGroup>*/}
                {/*<Input name="securityQuestions" value={farmer.securityQuestions} onChange={handleChange} />*/}
              {/*</FormGroup>*/}
            {/*</Col>*/}
          {/*</Row>*/}
          <Row style={{justifyContent:'center'}}>
            <Button color="primary" type="submit">SUBMIT</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(AgentForm)
