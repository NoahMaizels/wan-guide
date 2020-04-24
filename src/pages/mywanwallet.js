import React from 'react';

const MyWanWallet = () => {
  return(
    <div>
      <h1 className="title">
        MyWanWallet.io Video Guide
      </h1>
      <iframe className="video" title="My Wan Wallet" src="https://www.youtube.com/embed/V-UsaKPh3FI" frameborder="0" allowfullscreen="" id="1551239243"></iframe>
      <p class="info">
        This video explains to you how you can easily stake Wanchain on <a rel="noopener noreferrer" target="_blank" href="https://mywanwallet.io/">https://mywanwallet.io/</a>  using your Trezor hardware wallet.
      </p>
      <p className="info">
      For more information and downloads please navigate to the <a rel="noopener noreferrer" target="_blank" href="https://www.wanchain.org/getstarted/">Wanchain official website</a>.
      </p>
    </div>
  )
}

export default MyWanWallet