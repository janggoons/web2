import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="React" desc="React is the library for web and native user interfaces."></Content>
      </div>
    );
  }  
}

export default App;
