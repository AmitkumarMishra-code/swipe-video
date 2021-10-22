import { useState } from "react"
import ReactPlayer from "react-player"
import './VideoFrame.css'

export default function VideoFrame({url}){
    const [playing, setPlaying] = useState(false)
    return(
        <div className="video-frame" >
            <ReactPlayer url = {url} playing = {playing}/>
        </div>
    )
}