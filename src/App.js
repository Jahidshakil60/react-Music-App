

import React  from "react"
import "./styles/app.scss";
import Song from './component/Song';
import Player from './component/Player';
import data from './utils'
import { useState ,useRef } from "react";
import Library from "./component/Library";
import Nav from "./component/Nav";

function App() {
  //ref
  const audioRef = useRef(null)

 //state 
const [songs , setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
})

const [libraryStatus, setLibraryStatus] = useState(false)


const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo ({...songInfo , currentTime: current , duration  })
  
}



  return (
    <div className="App">
      <Nav  setLibraryStatus ={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song  currentSong = {currentSong}/>
      <Player 
      
      setSongInfo = {setSongInfo}
      songInfo ={songInfo}
      audioRef = {audioRef}
      isPlaying ={isPlaying} 
      setIsPlaying={setIsPlaying} 
      currentSong = {currentSong}
      songs={songs}
      setCurrentSong={setCurrentSong}
      />
      <Library  
      audioRef ={audioRef}
      setCurrentSong ={ setCurrentSong} 
      isPlaying={isPlaying}
      songs = {songs}
      setSongs ={setSongs}
      libraryStatus={libraryStatus}
      
      />

      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
     
    </div>
  );
}

export default App;
