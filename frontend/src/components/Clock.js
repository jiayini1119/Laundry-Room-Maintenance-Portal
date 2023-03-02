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
    <div>
      <h1 className = "Clock">{currentTime}</h1>
    </div>
  )
}
export default Clock;