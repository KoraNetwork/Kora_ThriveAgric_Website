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
  submitFarmer,
  clearSelected
} from './actions';

const leftColProps = {
  md: { size:3, offset:3 },
  style: { display:'flex',alignItems: 'center' }
};

class FarmerForm extends React.Component {

  questions = [
    'What was your childhood nickname',
    'What is the first name of your best friend',
    'What is your mother’s maiden name?',
    'What is the name of your favorite sports team?',
    'Who is your favorite singer?',
    'What is your passport number?'
  ];

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
          <h2 style={{marginTop: 30}}>{farmer.id ? "FARMER DETAIL" : "CREATE FARMER"}</h2>
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
          <Row style={ farmer.id ? {} : {marginTop: 30}}>
            <Col {...leftColProps}>
              <Label>Email address</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="emailAddress" value={farmer.emailAddress} onChange={handleChange} className={farmer.errors['emailAddress'] ? 'error' : ''} />
                <FormFeedback className="error">{farmer.errors['emailAddress']}</FormFeedback>
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
                <FormFeedback className="error">{farmer.errors['firstName']}</FormFeedback>
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
                <FormFeedback className="error">{farmer.errors['phoneNumber']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          {
            <Row>
              <Col {...leftColProps}>
                <Label>Phone Status</Label>
              </Col>
              <Col md={3}>
                {farmer.phoneStatus ? "Active" : "Unconfirmed"}
              </Col>
            </Row>
          }
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
                <Input type="select" name="payrollStatus" value={farmer.payrollStatus} onChange={handleChange} className={farmer.errors['payrollStatus'] ? 'error' : ''}>
                  <option>Active</option>
                  <option>Inactive</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <h3 style={{marginTop: 30}}>Security Question</h3>
          <Row style={{marginTop: 30}}>
            <Col {...leftColProps}>
              <Label>Question 1</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="question1" type="select" value={farmer.question1} onChange={handleChange} className={farmer.errors['question1'] ? 'error' : ''}>
                  {this.questions.map(question => (
                    <option>{question}</option>
                  ))}
                </Input>
                <FormFeedback className="error">{farmer.errors['question1']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Answer</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="answer1" value={farmer.answer1} onChange={handleChange} className={farmer.errors['answer1'] ? 'error' : ''} />
                <FormFeedback className="error">{farmer.errors['answer1']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Question 2</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="question2" type="select" value={farmer.question2} onChange={handleChange} className={farmer.errors['question2'] ? 'error' : ''}>
                  {this.questions.map(question => (
                    <option>{question}</option>
                  ))}
                </Input>
                <FormFeedback className="error">{farmer.errors['question2']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Answer</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="answer2" value={farmer.answer2} onChange={handleChange} className={farmer.errors['answer2'] ? 'error' : ''} />
                <FormFeedback className="error">{farmer.errors['answer2']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          {farmer.id && (
            <Row>
              <Col {...leftColProps}>
                <Button color="danger" type="button" onClick={router.push.bind(this, `/farmers/${farmer.id}/delete`)}>DELETE FARMER</Button>
              </Col>
              <Col md={3}>
                <FormGroup>

                </FormGroup>
              </Col>
            </Row>
          )}

          <Row style={{justifyContent:'center'}}>
            <Button type="submit" color="primary">SUBMIT</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(FarmerForm)
