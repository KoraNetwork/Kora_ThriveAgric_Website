import React from 'react';
import { connect } from 'react-redux'
import {
  Input,
  Button,
  Table
} from 'reactstrap'


class Transactions extends React.Component {


  render() {
    return(
      <div className="layout">
        <div className="top-block">
          <h2>TRANSACTIONS HISTORI</h2>
          <div className="search-block">
            <Input className="search-input"/>
            <Button>SEARCH</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>Post/Timestapm</th>
              <th>Completed/Timestapm</th>
              <th>Originator</th>
              <th>Recepient</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Status</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }
}

export default connect(state => state)(Transactions)
