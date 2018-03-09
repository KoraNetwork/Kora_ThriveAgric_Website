import React from 'react';
import {connect} from 'react-redux';


class AdminShow extends React.Component {

  state = {
    transaction: {value: '000000000'}
  };

  render() {

    const { transaction } = this.state;

    return(
      <div className="layout">
        <h2 className="title">TRANSACTION DETAILS</h2>
        <table className="table-details">
          <tr>
            <td>Transaction Id</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Post timestamp</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Completion timestamp</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Originator</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Recipient</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{transaction.value}</td>
          </tr>
          <tr>
            <td>Transaction type</td>
            <td>{transaction.value}</td>
          </tr>
        </table>

      </div>

    )
  }
}

export default connect(state => state)(AdminShow)
