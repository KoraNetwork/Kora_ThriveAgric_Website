import React from 'react';
import { connect } from 'react-redux'
import {
  FormControl,
  Button,
  Table
} from 'react-bootstrap'


class Farmers extends React.Component {


  render() {
    return(
      <div className="layout">
        <div className="top-block">
          <h2>FARMERS MENAGEMENT</h2>
          <div className="search-block">
            <FormControl className="search-input"/>
            <Button>SEARCH</Button>
            <Button>IMPORT FARMERS</Button>
            <Button>ADD FARMER</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>Farmer ID</th>
              <th>Name</th>
              <th>Fone Number</th>
              <th>Status</th>
              <th>Payroll Status</th>
              <th>Address </th>
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
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }
}

export default connect(state => state)(Farmers)
