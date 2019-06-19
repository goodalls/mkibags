import React from 'react';
import Header from '../Header/Header.js';
import Content from '../Content/Content';
import './App.scss';

const App = props => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
