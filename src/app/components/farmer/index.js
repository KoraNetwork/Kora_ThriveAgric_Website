import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {
  Input,
  Button,
  Table,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/fontawesome-free-solid';

import SortableTH from '../common/sortableTH';
import * as farmersActions from './actions';

class Farmers extends React.Component {

  componentDidMount() {
    farmersActions.fetchAll()
  }

  render() {
    const { router, farmers }= this.props;

    return(
      <div className="layout">
        <div className="top-block">
          <h2>FARMERS MANAGEMENT</h2>
          <div className="search-block">
            <Input className="search-input"
                   value={farmers.filters.emailAddress}
                   onChange={e => farmersActions.updateFilters([{ emailAddress: e.target.value }])} />
             <div className="loadingBlock">
               <FontAwesomeIcon className={this.props.global.isLoading ? "" : "none"} size="2x" pulse={true} icon={faSpinner} />
             </div>
            <Button color="primary" >IMPORT FARMERS</Button>
            <Button color="primary" onClick={router.push.bind(this, 'farmers/new')}>ADD FARMER</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>Farmer ID</th>
              <th><SortableTH update={farmersActions.updateFilters} column='firstName'>Name</SortableTH></th>
              <th><SortableTH update={farmersActions.updateFilters} column='phoneNumber'>Phone Number</SortableTH></th>
              <th>Status</th>
              <th>Payroll Status</th>
              <th>Address </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          {
            farmers.items.map(farmer => (
              <tr key={farmer.id}>
                <td>{farmer.id}</td>
                <td>{farmer.firstName + " " + farmer.lastName}</td>
                <td>{farmer.phoneNumber}</td>
                <td>{farmer.status}</td>
                <td>{farmer.payrollStatus}</td>
                <td>{farmer.address}</td>
                <td>
                  <Link to={`/farmers/${farmer.id}`}><FontAwesomeIcon icon={faSearch} /></Link>
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

export default connect(state => state)(Farmers)
