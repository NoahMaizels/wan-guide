import React from 'react';
import betaImage from '../images/beta-preview.png'
import mwwImage from '../images/mww-preview.png'
import lightImage from '../images/light-wallet-preview.png'

const Home = () => {
  return(
    <div className="home">
      <p className="info">Welcome to Wanchain.guide</p>
      <p className="info">This website shows you the different wallets and how to use them</p>
      <a href="/#/beta-wallet" className="beta-link preview-link"><img className="preview-image" src={betaImage} alt="Beta Wallet Instructions Video"/>
</a>  
<a className="mww-link preview-link" href="/#/my-wan-wallet"><img className="preview-image" src={mwwImage} alt="MyWanWallet.io Instructions Video"/>
</a>
      <a className="light-link preview-link" href="/#/light-wallet"><img className="preview-image" src={lightImage} alt="Light Wallet Instructions Video"/>
</a>
      
    </div>
  )
}

export default Home