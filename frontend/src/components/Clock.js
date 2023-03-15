import React, {useState} from 'react';
import "./HeaderFeatures.css";

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