import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Button
} from 'reactstrap'
import {
  fetchOne,
  handleChange,
  submitFarmer,
  clearSelected
} from './actions';

const leftColProps = {
  md: { size:3, offset:3 },
  style: { display:'flex',alignItems: 'center' }
};

class FarmerForm extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    if (id) fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {
    const { global: {isLoading}, farmers: { selected: farmer }, router } = this.props;

    return(
      <div className="layout">
        <form onSubmit={submitFarmer} className="form" autoComplete="off">
          {farmer.id && (
            <Row style={{marginTop: 30}}>
              <Col {...leftColProps}>
                <Label>ID</Label>
              </Col>
              <Col md={3}>
                {farmer.id}
              </Col>
            </Row>
          )}
          <Row style={{margin: '30 auto'}}>
            <Col {...leftColProps}>
              <Label>Email address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="emailAddress" value={farmer.emailAddress} onChange={handleChange} className={farmer.errors['emailAddress'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>First Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="firstName" value={farmer.firstName} onChange={handleChange} className={farmer.errors['firstName'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Last Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="lastName" value={farmer.lastName} onChange={handleChange} className={farmer.errors['lastName'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Phone Number</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="phoneNumber" value={farmer.phoneNumber} onChange={handleChange} className={farmer.errors['phoneNumber'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Phone Status</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="phoneStatus" value={farmer.phoneStatus} onChange={handleChange} className={farmer.errors['phoneStatus'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Phone Confirmation Code</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="phoneConfirmationCode" value={farmer.phoneConfirmationCode} onChange={handleChange} className={farmer.errors['phoneConfirmationCode'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="address" value={farmer.address} onChange={handleChange} className={farmer.errors['address'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Payroll Status</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="payrollStatus" value={farmer.payrollStatus} onChange={handleChange} className={farmer.errors['payrollStatus'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Button color="danger" type="button" onClick={router.push.bind(this, `/farmers/${farmer.id}/delete`)}>DELETE FARMER</Button>
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
            <Button type="submit" color="primary">SUBMIT</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(FarmerForm)
