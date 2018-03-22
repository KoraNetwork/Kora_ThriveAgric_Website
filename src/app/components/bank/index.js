import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {
  Input,
  Button,
  Table,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSpinner } from '@fortawesome/fontawesome-free-solid';

import SortableTH from '../common/sortableTH';
import * as banksActions from './actions';

class Banks extends React.Component {

  componentDidMount() {
    banksActions.fetch()
  }

  render() {
    const { router, banks }= this.props;

    return(
      <div className="layout">
        <div className="top-block">
          <h2>BANK MANAGEMENT</h2>
          <div className="search-block">
            <Input className="search-input"
                   value={banks.filters.emailAddress}
                   onChange={e => farmersActions.updateFilters([{ emailAddress: e.target.value }])} />
             <div className="loadingBlock">
               <FontAwesomeIcon className={this.props.global.isLoading ? "" : "none"} size="2x" pulse={true} icon={faSpinner} />
             </div>
            <Button color="primary" onClick={router.push.bind(this, 'banks/new')}>ADD BANK</Button>
          </div>
        </div>

        <Table responsive striped>
          <thead>
            <tr>
              <th>Etity Name</th>
              <th><SortableTH update={banksActions.updateFilters} column='bankName'>Bank Name</SortableTH></th>
              <th>Routing Number</th>
              <th>Acount Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            banks.items.map(bank => (
              <tr key={bank.id}>
                <td></td>
                <td>{bank.bankName}</td>
                <td>{bank.bankRoutingNumber}</td>
                <td>{bank.acountNumber}</td>
                <td>
                  <Link to={`/banks/${bank.id}`}><FontAwesomeIcon icon={faPencilAlt} /></Link>
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

export default connect(state => state)(Banks)
