import { React } from "react";

function Clock() {
  const updatedTime = () => {
    return new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  setInterval(updatedTime, 1000);
  const time = updatedTime();
  const hour = new Date().getHours();
  const greeting =
    "Good " + (hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening");
  const user = localStorage.getItem("userName");

  return (
    <div className="time-container">
      {time}
      <h1 className="heading">
        {greeting}, {user}.
      </h1>
    </div>
  );
}

export { Clock };
