import React from 'react';

const LightWallet = () => {
  return(
    <div>
      <h1 className="title">
        Light Wallet Video Guide
      </h1>
      <iframe className="video" title="Light Wallet" src="https://www.youtube.com/embed/83l6yR2jJJE" frameborder="0" allowfullscreen="" id="1419630383"></iframe>
      <p className="info">
        This video is a quick explanation of the Wanchain light wallet.
      </p>
      <p className="info">
        For more information and downloads please navigate to the <a rel="noopener noreferrer" target="_blank" href="https://www.wanchain.org/getstarted/">Wanchain official website</a>.
      </p>
    </div>
  )
}

export default LightWallet