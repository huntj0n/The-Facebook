import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';

function App() {
  return (
    <div className="app">
      Whats good World?
      <Nav />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
