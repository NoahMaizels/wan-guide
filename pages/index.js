
import Card from '../components/card'
import Layout from '../components/layout'
import fetch from 'node-fetch'
import { useState } from 'react'
import Link from 'next/link'




function HomePage() {
  const [data, setData] = useState("")
  
  
  return (
  <Layout>
  
  <section className="hero">
    <div className="hero-body hero-body-padding-large">
      <div className="container has-text-centered">
        <h1 className="title has-text-white">
          Welcome to Wanchain.guide
        </h1>
        <h2 className="subtitle has-text-white">
          This website features video guides and instructions for Wanchain software
        </h2>
      </div>
    </div>
  </section>
  <section>
    <div className="home">
      <Link href="/lightwallet">
        <a className="light-link preview-link">
          <div className="half-transparency">
            <div className="link-text">Light Wallet Guide</div>
          </div>
        </a> 
      </Link>
      <Link href="/crosschain">
        <a className="cross-link preview-link">
          <div className="half-transparency">
            <div className="link-text">Crosschain Transaction Guide</div>
          </div>
        </a> 
      </Link>
      <Link href="/dappstore">
        <a className="dapp-link preview-link">
          <div className="half-transparency">
            <div className="link-text">DApp Store Guide</div>
          </div>
        </a> 
      </Link>
      <Link href="/mywanwallet">
        <a className="mww-link preview-link">
          <div className="half-transparency">
            <div className="link-text">MyWanWallet Guide</div>
          </div>
        </a> 
      </Link>
      <Link href="/staking">
        <a className="staking-link preview-link">
          <div className="half-transparency">
            <div className="link-text">Staking Guide</div>
          </div>
        </a> 
      </Link>
    </div>
  </section>
  <style jsx>{`
    .link-text {
      color: white;
      font-size: 1.3rem;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 50px;
    }
    .half-transparency {
      background-color: rgba(0,0,0,.5);
      height: 100%;
      border-radius: 20px;
    }
    .preview-link:hover{
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
    
    .preview-link {
      -webkit-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
      -moz-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
      box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
      vertical-align: top;
      display: inline-block;
      background-size: cover;
      font-size: 2rem;
      border-radius: 20px;
      width: 350px;
      height: 175px;
      margin: 30px 20px;
      -webkit-transition: -webkit-transform .2s;
      transition: -webkit-transform .2s;
      transition: transform .2s;
      transition: transform .2s,-webkit-transform .2s;
    }
    .light-link {
      background-image: url("/light-wallet.png")
    }
    .cross-link {
      background-image: url("/cross-chain.png")
    }
    .dapp-link {
      background-image: url("/dapp-store.png")
    }
    .mww-link {
      background-image: url("/mww.png")
    }
    .staking-link {
      background-image: url("/staking.png")
    }
   
    .subtitle {
      max-width: 500px;
      margin: auto;
    }
    .info {
      max-width: 600px;
      margin: 30px auto;
      font-size: 1.3rem;
    }

    .home {
      margin-top: 50px;
      text-align: center;
      margin-bottom: 100px;
    }

    .home p {
      font-size: 2rem;
    }
    .preview-image {
      width: 300px;
      margin: 20px;
      opacity: .5;
      border: 10px solid black;
      border-radius: 20px;
    }

  @media(max-width: 800px) {
    .preview-link {
      width: 300px;
    }
  }
  `}</style>
  </Layout>
  )
}

export default HomePage