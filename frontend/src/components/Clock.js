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
      <h1 className = "Clock" style={{ fontSize: "22px" }}>{currentTime}</h1>
  )
}
export default Clock;