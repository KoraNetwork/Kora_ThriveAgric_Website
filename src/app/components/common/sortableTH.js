import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/fontawesome-free-solid'

export default class extends Component {

  state = {};

  updateParent() {
    const { update } = this.props;
    const { sortColumn, sortType } = this.state;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      update([{sortColumn, sortType}]);
    }, 500)
  }

  updateState = (sortColumn, sortType) => {
    this.setState({ sortColumn, sortType }, this.updateParent)
  };

  render() {
    const { sortColumn, sortType } = this.state;
    const { column } = this.props;

    return(
      <div>
        { this.props.children }&nbsp;
        {
          sortColumn !== column
            ? <FontAwesomeIcon icon={faSort} onClick={e => this.updateState(column,'asc')} />
            : null
        }
        {
          sortColumn === column && sortType === 'asc'
            ? <FontAwesomeIcon icon={faSortUp} onClick={e => this.updateState(column,'desc')} />
            : null
        }
        {
          sortColumn === column && sortType === 'desc' ?
            <FontAwesomeIcon icon={faSortDown} onClick={e => this.updateState(null,null)} />
            : null
        }
      </div>
    )
  }

}
