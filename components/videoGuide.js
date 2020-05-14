
const VideoGuide = ({pageTitle, videoUrl, videoTitle, info, children}) => {
  return(
    <div>

    <section className="hero">
        <div className="hero-body hero-body-padding-large">
          <div className="container has-text-centered">
          <h1 className="title has-text-white">
            {pageTitle}
          </h1>
          <iframe className="video" title={videoTitle} src={videoUrl} frameborder="0" allowfullscreen="" id="1419630383"></iframe>
          <p className="info">
            {info}
          </p>
          <p className="info">
            For more information and downloads please navigate to the <a rel="noopener noreferrer" target="_blank" href="https://www.wanchain.org/getstarted/">Wanchain official website</a>.
          </p>
          </div>
        </div>
      </section>
      {children}
      <style jsx>{`
        iframe {
          background-color: black;
          -webkit-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
-moz-box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
box-shadow: 0px 0px 7px 3px rgba(184,184,184,1);
        }
        .title {
          text-align: center;
          margin-bottom: 50px;
        }
        .video {
          display: block;
          margin: auto;
          width: 640px;
          height: 360px;
        }
        .info {
          max-width: 600px;
          margin: 30px auto;
          font-size: 1.3rem;
        }

        @media (max-width: 700px) {
          .info {
            width: 300px
          }
          .video {
            display: block;
            margin: auto;
            width: 90vw;
            height: 240px;
          }
        }
      `}</style>
    </div>
  )
}

export default VideoGuide