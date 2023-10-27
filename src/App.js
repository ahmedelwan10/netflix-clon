import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Gallery1 from './Galleries/Gallery1';
import Gallery2 from './Galleries/Gallery2';
import Gallery3 from './Galleries/Gallery3';
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
          Learn React
        </a>
      </header>

      <NavBar />
      <Gallery1 />

      <Gallery2 />
      <Gallery3 />ß



      <Footer />
   
    </div>
  );
}

export default App;
