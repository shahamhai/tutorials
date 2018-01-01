import React, {Component} from 'react';
import * as cssTutorials from '../store/css.json';
import * as javascriptTutorials from '../store/javascript.json';
import * as reactTutorials from '../store/react.json';
import * as angular1Tutorials from '../store/angular1.json';
import * as angular5Tutorials from '../store/angular5.json';

export default class TopicPage extends Component {
  render() {
    const {topic} = this.props.match.params;
    let tutorials;
    switch (topic) {
      case 'css':
        tutorials = cssTutorials.URLs;
        break;
      case 'javascript':
        tutorials = javascriptTutorials.URLs;
        break;
      case 'react':
        tutorials = reactTutorials.URLs;
        break;
      case 'angular 1.x':
        tutorials = angular1Tutorials.URLs;
        break;
      case 'angular 5':
        tutorials = angular5Tutorials.URLs;
        break;
      default: tutorials = null;
      break;
    }
    console.log(tutorials);
    return (<div>this is the {`${topic} `}
      page
      <p>{tutorials[0]}</p>
      </div>);
  }
}
