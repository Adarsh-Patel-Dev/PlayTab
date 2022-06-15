import { React,useEffect, useState } from "react";

function Clock() {
  const [time, setTime ] = useState(new Date())

  useEffect(() => {
    let TimeId = setInterval(()=>setTime(new Date()),1000) 
    return ()=> clearInterval(TimeId)
  })
  
  const hour = new Date().getHours();
  const greeting =
    "Good " + (hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening");
  const user = localStorage.getItem("userName");


  return (
    <div className="time-container">
      {time.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })}
      <h1 className="heading">
        {greeting}, {user}.
      </h1>
    </div>
  );
}

export { Clock };
