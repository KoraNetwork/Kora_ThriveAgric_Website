import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import Navigation from './common/navigation'

class App extends React.Component {

  render() {
    const { children, currentUser } = this.props;
    return (
      <div className="container">
        <Header />
        { currentUser.id ? <Navigation /> : null }
        { children }
      </div>
    );
  }
}

App.propTypes = { children: PropTypes.object };

export default connect(state => state)(App);
