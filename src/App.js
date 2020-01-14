import React from 'react';
import './App.css';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import BetaWallet from './pages/betawallet'
import LightWallet from './pages/lightwallet'
import MyWanWallet from './pages/mywanwallet'
import logo from './images/wanchain-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      menuDisplay: false,
    }
  }
  burgerBarHandler = () => {
    this.setState({menuDisplay: !this.state.menuDisplay})
  }
  linkHandler = () => {
    this.setState({menuDisplay: !this.state.menuDisplay})
  }
  render() {
    const activeNavStyle = {color: "rgb(0,165,255)", textDecoration: "underline",  marginRight: "30px"}
    const navStyle = {fontSize: "1.8rem", fontWeight: 700, color: "white", textDecoration: "none",  marginRight: "30px" }
    const menuVis = this.state.menuDisplay ? 'show' : 'hide'
    console.log(menuVis)
    return (
      <Router>
        <div className="header-background"></div>
   
        <nav className="navbar">
          <img className ="logo" src={logo} alt="logo"/>
          <span onClick={this.burgerBarHandler} className="burger-bar">
            <FontAwesomeIcon  icon={faBars} size="3x" color="green"/>
          </span>
          <div className={`flex-container ${menuVis}`}>
            <NavLink onClick={this.linkHandler} className="NavLink" exact to="/" style={navStyle} activeStyle={activeNavStyle}>Home</NavLink>
            <NavLink onClick={this.linkHandler} className="NavLink" to="/beta-wallet/" style={navStyle} activeStyle={activeNavStyle}>Beta Wallet</NavLink>
            <NavLink onClick={this.linkHandler} className="NavLink" to="/light-wallet/" style={navStyle} activeStyle={activeNavStyle}>Light Wallet</NavLink>
            <NavLink onClick={this.linkHandler} className="NavLink" to="/my-wan-wallet/" style={navStyle} activeStyle={activeNavStyle}>MyWanWallet</NavLink>
          </div>
        </nav>

        <Switch>
          <Route path="/beta-wallet/" component={BetaWallet}/>
          <Route path="/light-wallet/" component={LightWallet}/>
          <Route path="/my-wan-wallet/" component={MyWanWallet}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
);
  }
}

export default App;
