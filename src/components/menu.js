import React, {Component} from 'react';
import MenuItem from './menuItem.js';
import * as json from '../store/topics.json';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {topics: []};
  }

  componentDidMount(){
    this.setState({topics: json.topics});
  }

  render() {
    const topics = this.state.topics.map(topic => {
      return(
        <MenuItem key={topic} topic={topic} topicPage={topic}/>
      );
    })
    return (<nav className="navbar navbar-expand-sm navbar-dark bg-info sticky-top">
      <Link className="navbar-brand" to="/">Tutorials</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {topics}
        </ul>
      </div>
    </nav>);
  }
}
