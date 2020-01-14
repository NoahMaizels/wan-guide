import React from 'react';

const BetaWallet = () => {
  return(
    <div>
      <h1 className="title">
        Beta Wallet Video Guide
      </h1>
      <iframe className="video" title="beta-wallet" src="https://www.youtube.com/embed/PE4ZihJL9Is" frameborder="0" allowfullscreen="" id="1419630383"></iframe>
      <p className="info">
        This video is a quick explanation of the beta wanchain light wallet. This is based on the beta wallet and the official wallet will be released soon. My guess is it won't be too different from the beta
      </p>
      <p className="info">
        For more information please navigate to the <a rel="noopener noreferrer" target="_blank" href="http://www.wanchain.org">Wanchain official website</a>.
      </p>
    </div>
  )
}

export default BetaWallet