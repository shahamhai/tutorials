import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MenuItem extends Component {

  render(props) {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={`/${this.props.topicPage}`}>{this.props.topic}</Link>
      </li>
    );
  }
}
