import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

export default class extends Component {
  render() {
    return (
      <article class="insta-card">
        <Header />
        <Body />
      </article>
    );
  }
}