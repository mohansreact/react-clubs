import React, { Component } from 'react';

import Club from './Club';
import './ClubApp.css';

class ClubApp extends Component {
  render() {
    return (
      <div className="App">
        <Club title="mancity"/>
      </div>
    );
  }
}

export default ClubApp;
