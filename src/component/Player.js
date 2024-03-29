
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay , faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ setCurrentSong,currentSong, songs,songInfo, audioRef, setSongInfo ,setIsPlaying,isPlaying}) {
  


  const playHandler = () => {
   
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying)

    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying)

    }

  }
  

  const getTime = (time) => {
    return(
      Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )

  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo ({...songInfo , currentTime: e.target.value });
  }

  const skipTrackHandler =(direction) =>{
      let currentIndex= songs.findIndex((song)=>song.id===currentSong.id);
     if(direction==='skip_forward'){
       setCurrentSong(songs[(currentIndex+1)% songs.length]);
     }
     if(direction==='skip_back'){

        if((currentIndex-1)% songs.length===-1){
          setCurrentSong(songs[songs.length-1])
          return
        }
      setCurrentSong(songs[(currentIndex-1)% songs.length]);
     }
  };
  


  return <div className="player">
  <div className="time-control">
      <p>{getTime(songInfo.currentTime)}</p>
      <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
      <p>{getTime(songInfo.duration)}</p>
  </div>
  <div className="play-control">
      <FontAwesomeIcon onClick={()=>skipTrackHandler('skip_back')} className="skip-back" size ="2x" icon={faAngleLeft}/>
      <FontAwesomeIcon onClick={playHandler} className="play" size ="2x" icon={isPlaying ? faPause : faPlay}/>
      <FontAwesomeIcon onClick={()=>skipTrackHandler('skip_forward')} className="skip-forward" size ="2x" icon={faAngleRight}/>
  </div>

 

</div>;
}

export default Player;
