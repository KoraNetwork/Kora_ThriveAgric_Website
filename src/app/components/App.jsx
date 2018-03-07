import React, { PropTypes } from 'react';
import Header from './common/Header';
import Navigation from './common/navigation'

function App({ children }) {
  return (
    <div className="container">
      <Header />
      <Navigation />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
