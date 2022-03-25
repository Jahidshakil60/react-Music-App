import React from 'react'
import LibrarySong from './LibrarySong'

function Library({isPlaying,  audioRef,songs ,setCurrentSong ,libraryStatus, setSongs}) {
  return (
    <div>
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h1>Library Song</h1>
            <div className="library-songs">
                  {songs.map(song =>
                   <LibrarySong 
                    songs={songs} 
                    id ={song.id} 
                    key ={song.id}
                    audioRef ={audioRef}
                    isPlaying={isPlaying}
                    setCurrentSong ={setCurrentSong} 
                    song={song}
                    setSongs={setSongs}/>)}
            </div>
        </div>
    </div>
  )
}

export default Library