import { useState } from "react"
import Head from 'next/head'
import Link from 'next/link'



export default function Layout(props) {

  const [menu, setMenu] = useState(null)
  const [dropdown, setDropdown] = useState("hidden")

  const menuClickHandler = () => {
    menu === null ? setMenu("is-active") : setMenu(null)
  }

  const dropdownClickHandler = () => {

    dropdown === null ? setDropdown("hidden") : setDropdown(null)
  }
 
  return(
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet"/>
      </Head>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/logo.png" width="112" height="28"/>
            </a>
          </Link>
          <a role="button" onClick={menuClickHandler} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${menu}`}>
          <div className="navbar-start">
            
          </div>

          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item">
                Home
              </a>
            </Link>
            <Link href="/wan-army">
              <a className="navbar-item">
                Wan-Army
              </a>
            </Link>
            <a href="https://www.explorewanchain.org/#/wallet_and_tools/wan-wallet" target="_blank" className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a onClick={dropdownClickHandler} className="navbar-link">
                Video Guides
              </a>
              <div className={`navbar-dropdown is-right ${dropdown}`}>
                  <Link href="/crosschain">
                    <a className="navbar-item">Cross Chain</a>
                  </Link>
                  <Link href="/dappstore">
                    <a className="navbar-item">DApp Store</a>
                  </Link>
                  <Link href="/lightwallet">
                    <a className="navbar-item">Light Wallet</a>
                  </Link>
                  <Link href="/mywanwallet">
                    <a className="navbar-item">MyWanWallet</a>
                  </Link>
                  <Link href="/staking">
                    <a className="navbar-item">Staking</a>
                  </Link>
                
                
              </div>
            </div>
          </div>
        </div>
      </nav>
      {props.children}
      <style jsx>{`    
        .hidden {
          display: none;
        }
        .navbar {
          -webkit-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
          -moz-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
          box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
        }
      `}</style>
    
    </div>
  )  
}