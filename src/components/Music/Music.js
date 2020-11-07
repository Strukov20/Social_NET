import React from "react";
import audio1 from "../../assets/audio/auf_mp3.mp3"
import audio2 from "../../assets/audio/idris_amp_leos_-_vidu_ne_podam.mp3"
import audio3 from "../../assets/audio/islam_itljashev_-_ona_ljubila_rozi.mp3"
import './Music.scss'

const initialState = [
    {id:1, src: audio1},
    {id:2, src: audio2},
    {id:3, src: audio3}

]

export const Music = () => {

    const playlist = initialState.map(music => <audio  src={music.src} controls className="audio_item"/>)

    return(
        <div className="audio">
            <div className="audio_title">AUDIO</div>
            <div className="audio_track">{playlist}</div>
        </div>
    )
}