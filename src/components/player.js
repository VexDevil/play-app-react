import React from 'react'

function Player() {
    return(
    <div className="Player">
        <h4>
            Playing Now
        </h4>
        <audio className="player_audio"
            src=''
            controls
        >

        </audio>
        <p>
            Next Up: {" "}
            <span> Next Song</span>
        </p>

    </div>)

}

export default Player;
