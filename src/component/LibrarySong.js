import React from 'react'

function LibrarySong({song ,songs,isPlaying, audioRef ,id , setCurrentSong, setSongs}) {
  const songSelectHandler =  () => {
    //  const selectedSong = songs.filter((state) => state.id === id) ;
    setCurrentSong (song);
    
    

    //song active status

    const newSong = songs.map((song)=>{
      
      if(song.id === id ) {
        return {

          ...song,
          active: true,
        }

      }else{
       return{
        ...song,
        active: false,
       }

      }



    })

    setSongs(newSong);

    if(isPlaying){
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
     
  }
  return (
    <div onClick={songSelectHandler} className={`library-song  ${song.active ? "selected" : ""}`}>
     <img src={song.cover} alt="axcf" />
     <div className="song-description">
     <h2>{song.name}</h2>
     <h3>{song.artist}</h3>
     </div>
    
    </div>
  );
};

export default LibrarySong;