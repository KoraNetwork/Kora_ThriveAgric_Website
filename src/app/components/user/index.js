import React from 'react';
import { connect } from 'react-redux'
import {
  FormControl,
  Button,
  Table
} from 'reactstrap'


class Users extends React.Component {


  render() {
    return(
      <div className="layout">
        <div className="top-block">
          <h2>USERS MENAGEMENT</h2>
          <div className="search-block">
            <FormControl className="search-input"/>
            <Button>SEARCH</Button>
            <Button>ADD USER</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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

export default connect(state => state)(Users)
