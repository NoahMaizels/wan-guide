import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import BetaWallet from './pages/betawallet'
import LightWallet from './pages/lightwallet'
import MyWanWallet from './pages/mywanwallet'
import logo from './images/wanchain-logo.png'
import { underline } from 'ansi-colors';

function App() {
 
  const activeNavStyle = {color: "rgb(0,165,255)", textDecoration: "underline",  marginRight: "30px"}
  const navStyle = {fontSize: "1.5rem", color: "white", textDecoration: "none",  marginRight: "30px" }

  return (
    <div className="App">
        <img class ="logo" src={logo} alt="logo"/>
        <Router>
          <nav className="navbar">
            <NavLink class="navlink" exact to="/" style={navStyle} activeStyle={activeNavStyle}>Home</NavLink>
            <NavLink class="navlink" to="/beta-wallet" style={navStyle} activeStyle={activeNavStyle}>Beta Wallet</NavLink>
            <NavLink class="navlink" to="/light-wallet" style={navStyle} activeStyle={activeNavStyle}>Light Wallet</NavLink>
            <NavLink class="navlink" to="/my-wan-wallet" style={navStyle} activeStyle={activeNavStyle}>My Wan Wallet</NavLink>
          </nav>

          <Switch>
            <Route path="/beta-wallet">
              <BetaWallet />
            </Route>
            <Route path="/light-wallet">
              <LightWallet />
            </Route>
            <Route path="/my-wan-wallet">
              <MyWanWallet />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
