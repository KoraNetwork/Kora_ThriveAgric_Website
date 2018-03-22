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
  submitBank,
  clearSelected
} from './actions';

const leftColProps = {
  md: { size:3, offset:3 },
  style: { display:'flex',alignItems: 'center' }
};

class BankForm extends React.Component {

  componentDidMount() {
    const { params: { id } } = this.props;
    if (id) fetchOne(id)
  }

  componentWillUnmount() {
    clearSelected()
  }

  render() {

    const { global: {isLoading}, banks: { selected: bank }, router } = this.props;

    return(
      <div className="layout">
        <form onSubmit={submitBank} className="form" autoComplete="off">
          <h2 style={{marginTop: 30}}>{bank.id ? "BANK DETAIL" : "CREATE BANK"}</h2>
          <Row style={{marginTop: 30}}>
            <Col {...leftColProps}>
              <Label>Bank Name</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="bankName" value={bank.bankName} onChange={handleChange} className={bank.errors['bankName'] ? 'error' : ''} />
                <FormFeedback className="error">{bank.errors['bankName']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Swift Code</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="bankRoutingNumber" value={bank.bankRoutingNumber} onChange={handleChange} className={bank.errors['bankRoutingNumber'] ? 'error' : ''} />
                <FormFeedback className="error">{bank.errors['bankRoutingNumber']}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>Acount Code</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="acountNumber" value={bank.acountNumber} onChange={handleChange} className={bank.errors['acountNumber'] ? 'error' : ''} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col {...leftColProps}>
              <Label>COnfirm Acount Code</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="confirmAcountNumber" value={bank.confirmAcountNumber} onChange={handleChange} className={bank.errors['confirmAcountNumber'] ? 'error' : ''} />
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

export default connect(state => state)(BankForm)
