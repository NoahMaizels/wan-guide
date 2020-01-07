import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Home from './pages/home'
import BetaWallet from './pages/betawallet'
import LightWallet from './pages/lightwallet'
import MyWanWallet from './pages/mywanwallet'
import logo from './images/wanchain-logo.png'


function App() {
 
  const activeNavStyle = {color: "rgb(0,165,255)", textDecoration: "underline",  marginRight: "30px"}
  const navStyle = {fontSize: "1.5rem", color: "white", textDecoration: "none",  marginRight: "30px" }

  return (
        <Router>
          <img class ="logo" src={logo} alt="logo"/>
          <nav className="navbar">
            <NavLink class="navlink" exact to="/" style={navStyle} activeStyle={activeNavStyle}>Home</NavLink>
            <NavLink class="navlink" to="/beta-wallet/" style={navStyle} activeStyle={activeNavStyle}>Beta Wallet</NavLink>
            <NavLink class="navlink" to="/light-wallet/" style={navStyle} activeStyle={activeNavStyle}>Light Wallet</NavLink>
            <NavLink class="navlink" to="/my-wan-wallet/" style={navStyle} activeStyle={activeNavStyle}>MyWanWallet</NavLink>
          </nav>

         
            <Route path="/beta-wallet" component={BetaWallet}/>
            <Route path="/light-wallet" component={LightWallet}/>
            <Route path="/my-wan-wallet" component={MyWanWallet}/>
            <Route path="/" component={Home}/>
          
        </Router>
  );
}

export default App;
