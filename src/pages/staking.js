import React from 'react';

const Staking = () => {
  return(
    <div>
       <h1 className="title">
        Staking Video Guide
      </h1>
      <iframe className="video"title="Staking" src="https://www.youtube.com/embed/Z2laPWbZkfk" frameborder="0" allowfullscreen="" id="1668884432"></iframe>
      <p className="info">
        This video explains how to stake WAN using the light wallet and Ledger hardware wallet, and how you can easily top-up your current stake to the same validator using the top-up function.
      </p>
      <p className="info">
      For more information and downloads please navigate to the <a rel="noopener noreferrer" target="_blank" href="https://www.wanchain.org/getstarted/">Wanchain official website</a>.
      </p>
    </div>
  )
}

export default Staking