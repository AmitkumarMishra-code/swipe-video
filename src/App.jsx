import { useSwipeable } from "react-swipeable";
import VideoFrame from "./VideoFrame";
import './App.css'
import { useEffect, useState } from "react";
// const videoLinks = [
//   "https://youtu.be/jJV1gmIuujo",
//   "https://youtu.be/g_1oiJqE3OI",
//   "https://youtu.be/r9PeYPHdpNo",
//   "https://youtu.be/qv2hvCJrM4Q",
//   "https://youtu.be/R2DU85qLfJQ",
//   "https://youtu.be/uIKJgxbhAzM",
//   "https://youtu.be/pkhE14Rou-E",
//   "https://youtu.be/XaZhOtxsUnY",
//   "https://youtu.be/ebeNeQFUMa0",
//   "https://youtu.be/goVs04xNp8c"
// ]

const localVideo = [
  './video1.mp4', './video2.mp4', './video3.mp4','./video4.mp4','./video5.mp4'
]
const config = {
  preventDefaultTouchmoveEvent: true,  // call e.preventDefault *See Details*
  trackMouse: true,                    // track mouse input
}

function App() {
  const [left, setLeft] = useState(0)
  const [current, setCurrent] = useState(0)
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      setCurrent(current === localVideo.length - 1 ? 0 : current + 1)
    },   // After LEFT swipe 
    onSwipedRight: (e) => {
      setCurrent(current === 0 ? localVideo.length - 1 : current - 1)
    },  // After RIGHT swipe 
    ...config,
  });

  useEffect(() => {
    setLeft(current * 600)
  },[current])

  return (
    <div className="App">
      <h2>Swipe to Change Video</h2>
      <div className="video-carousel" {...handlers}>
        <div className="carousel" style={{ left: `-${left}px` }}>
          {localVideo.map((video, idx) => <video key={idx} controls width='575px' height='500px'><source src={video} type="video/mp4" /></video>)}
        </div>
      </div>
    </div>
  )
}

export default App
