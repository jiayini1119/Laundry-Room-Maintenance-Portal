import React, {useState} from 'react';
import "./HeaderFeatures.css";


/* Reference: Workforwin. "How to create a digital clock in ReactJs?" Youtube, March 1, 2023. https://www.youtube.com/watch?v=T_lFnwLiATc*/
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return(  
      <div className = "Clock" style={{ fontSize: "22px" }}>{currentTime}</div>
  )
}
export default Clock;