import React from "react";
 import YouTube from "react-youtube";


 class HomeHorizonClip extends React.Component {
    render() {
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <div className="vid-container"> <YouTube videoId="QxMD300peCA" options={options} onReady={this._onReady} id="video" className="video-frame" /> </div>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default HomeHorizonClip;