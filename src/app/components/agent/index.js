import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {
  Input,
  Button,
  Table
} from 'reactstrap'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/fontawesome-free-solid';

import SortableTH from '../common/sortableTH';
import * as agentsActions from './actions';

class Agents extends React.Component {

  componentDidMount() {
    agentsActions.fetch()
  }

  render() {

    const { router, agents }= this.props;

    return(
      <div className="layout">
        <div className="top-block">
          <h2>AGENT MENAGEMENT</h2>
          <div className="search-block">
            <Input className="search-input"
                   value={agents.filters.emailAddress}
                   onChange={e => agentsActions.updateFilters([{ emailAddress: e.target.value }])}/>
            <div className="loadingBlock">
              <FontAwesomeIcon className={this.props.global.isLoading ? "" : "none"} size="2x" pulse={true} icon={faSpinner} />
            </div>
            <Button color="primary">IMPORT AGENTS</Button>
            <Button color="primary" onClick={router.push.bind(this, 'agents/new')}>ADD AGENT</Button>
          </div>
        </div>

        <Table>
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
            {
              agents.items.map(agent => (
                <tr key={agent.id}>
                  <td>{agent.id}</td>
                  <td>{agent.firstName + ' ' + agent.lastName}</td>
                  <td>{agent.address}</td>
                  <td>{agent.phoneNumber}</td>
                  <td>{agent.status}</td>
                  <td>{agent.businessName}</td>
                  <td>{agent.businessAddress}</td>
                  <td>
                    <Link to={`/agents/${agent.id}`}><FontAwesomeIcon icon={faSearch} /></Link>
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

export default connect(state => state)(Agents)
