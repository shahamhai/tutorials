import React, { Component } from 'react';

export default class VideoCard {

  render(){

    return (
      <div class="card" style="width: 18rem;">
        <iframe src={this.props.url} frameborder="0"></iframe>
        <div class="card-body">
          <h5 class="card-title">Video Title</h5>
          <p class="card-text">Video description here</p>
        </div>
      </div>

    );
  }
}
