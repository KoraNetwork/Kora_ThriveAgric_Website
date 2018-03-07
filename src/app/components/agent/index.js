import React from 'react';
import { connect } from 'react-redux'
import {
  FormControl,
  Button,
  Table
} from 'react-bootstrap'


class Agents extends React.Component {


  render() {
    return(
      <div className="layout">
        <div className="top-block">
          <h2>AGENT MENAGEMENT</h2>
          <div className="search-block">
            <FormControl className="search-input"/>
            <Button>SEARCH</Button>
            <Button>IMPORT AGENTS</Button>
            <Button>ADD AGENT</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Name</th>
              <th>Address </th>
              <th>Fone Number</th>
              <th>Status</th>
              <th>Business Name</th>
              <th>Business Address</th>
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
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }
}

export default connect(state => state)(Agents)
