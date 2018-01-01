import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import * as json from './store/topics.json';

import Menu from './components/menu.js';
import MainPage from './components/mainPage.js';
import TopicPage from './components/topicPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Menu />
            <Route exact path="/" component={MainPage} />
            <Route path="/:topic" component={TopicPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
