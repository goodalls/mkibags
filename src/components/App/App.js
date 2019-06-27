import React from 'react';
import Header from '../Header/Header.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';
import './reset.scss';
import './App.scss';

const App = props => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
