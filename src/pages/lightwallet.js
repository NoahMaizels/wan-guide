import React from 'react';

const LightWallet = () => {
  return(
    <div>
       <h1 className="title">
        Light Wallet Video Guide
      </h1>
      <iframe className="video"title="Light Wallet" src="https://www.youtube.com/embed/Z2laPWbZkfk" frameborder="0" allowfullscreen="" id="1668884432"></iframe>
      <p className="info">
        This video explains how to stake wanchain using the lightwallet and Ledger hardware wallet and how you can easily top-op your current stake to the same validator using the top-op function.
      </p>
    </div>
  )
}

export default LightWallet