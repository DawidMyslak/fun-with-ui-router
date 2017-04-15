import React, { Component } from 'react';
import { UISrefActive, UISref, UIView } from 'ui-router-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fun with UI-Router</h2>
        </div>
        <div className="App-menu">
          <ul>
            <UISrefActive class="active">
              <li><UISref to="home"><a>Home</a></UISref></li>
            </UISrefActive>
            <UISrefActive class="active">
              <li><UISref to="about"><a>About</a></UISref></li>
            </UISrefActive>
            <UISrefActive class="active">
              <li><UISref to="albums"><a>Albums</a></UISref></li>
            </UISrefActive>
          </ul>
        </div>
        <div className="App-content">
          <UIView />
        </div>
      </div>
    );
  }
}

export default App;
