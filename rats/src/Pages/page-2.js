import React from 'react';
import Link from 'gatsby-link';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rage Against the Supremes: Wolrd's Most Dangerous Cover Band
        </a>
        <p>Content goes here</p>
        <Link to="/page-2/">Page 2</Link>
      </header>
    </div>
  );
}