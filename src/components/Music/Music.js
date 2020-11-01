import React from "react";
import audio from "../../assets/audio/auf_mp3.mp3"
import './Music.scss'

export const Music = () => {
    return(
        <div className="audio">
            <div className="audio_title">AUDIO</div>
            <audio className="audio_track" src={audio} controls ></audio>'
        </div>
    )
}