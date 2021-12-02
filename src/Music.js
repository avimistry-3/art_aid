import React from "react";
import { render } from "react-dom";
import ReactPlayer from "react-player";

function Music() {
    return (
      <div >
        <h3 style={{textAlign:"center"}}>Music Player </h3>
        <p>Just Relax</p>
        <ReactPlayer
          url="Audio/music-1.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Melody of Nature</p>
        <ReactPlayer
          url="Audio/music2.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Jingle Bells</p>
        <ReactPlayer
          url="Audio/music3.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Forest ambience</p>
        <ReactPlayer
          url="Audio/music4.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Endless Beauty</p>
        <ReactPlayer
          url="Audio/music5.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Dreamy Beat</p>
        <ReactPlayer
          url="Audio/music6.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
         <p>Piano Tune</p>
        <ReactPlayer
          url="Audio/music7.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
      </div>
    );
  }
   
  export default Music;