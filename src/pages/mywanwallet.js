import React from 'react';

const MyWanWallet = () => {
  return(
    <div>
      <h1 className="title">
        MyWanWallet.io Video Guide
      </h1>
      <iframe className="video" title="My Wan Wallet" src="https://www.youtube.com/embed/V-UsaKPh3FI" frameborder="0" allowfullscreen="" id="1551239243"></iframe>
      <p class="info">
        This video explains to you how you can easily stake Wanchain on <a href="www.mywanwallet.io">www.mywanwallet.io</a>  using your Trezor hardware wallet.
      </p>
    </div>
  )
}

export default MyWanWallet