import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {
  Input,
  Button,
  Table
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faSpinner } from '@fortawesome/fontawesome-free-solid';

import SortableTH from '../common/sortableTH';
import * as usersActions from './actions';


class Users extends React.Component {

  componentDidMount() {
    usersActions.fetch()
  }

  render() {

    const { router, users }= this.props;

    return(
      <div className="layout">
        <div className="top-block">
          <h2>USERS MENAGEMENT</h2>
          <div className="search-block">
            <Input className="search-input"
                   value={users.filters.emailAddress}
                   onChange={e => usersActions.updateFilters([{ emailAddress: e.target.value }])}/>
             <div className="loadingBlock">
               <FontAwesomeIcon className={this.props.global.isLoading ? "" : "none"} size="2x" pulse={true} icon={faSpinner} />
             </div>
            <Button color="primary" onClick={router.push.bind(this, 'users/new')}>ADD USER</Button>
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
            {
              users.items.map(user => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.emailAddress}</td>
                  <td>{user.type}</td>
                  <td>
                    <Link style={{margin: 5}} to={`/users/${user.id}`}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <Link style={{margin: 5}} to={`/users/${user.id}/delete`}><FontAwesomeIcon icon={faTrash} /></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>

    )
  }
}

export default connect(state => state)(Users)
