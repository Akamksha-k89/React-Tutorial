import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header App="Second App"/>
      <h1>React App</h1>
      <Home/>
      <Cart/>
      <Footer year={2019} company="Mine"/>
      </div>
    );
  }
}

export default App;
