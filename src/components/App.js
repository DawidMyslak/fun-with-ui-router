import React, { Component } from 'react';
import { UISrefActive, UISref, UIView } from 'ui-router-react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable navbar-inverse bg-inverse fixed-top">
          <div className="navbar-brand">Fun with UI-Router</div>
          <div>
            <ul className="navbar-nav">
              <UISrefActive class="active">
                <li className="nav-item"><UISref to="home"><a className="nav-link">Home</a></UISref></li>
              </UISrefActive>
              <UISrefActive class="active">
                <li className="nav-item"><UISref to="about"><a className="nav-link">About</a></UISref></li>
              </UISrefActive>
              <UISrefActive class="active">
                <li className="nav-item"><UISref to="albums"><a className="nav-link">Albums</a></UISref></li>
              </UISrefActive>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="content">
            <UIView />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
