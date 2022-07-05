import { React, useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const [display, setDisplay] = useState("inline");

  const mycity = localStorage.getItem("myCity");

  const getWeatherDetails = async (cityName) => {
    try {
      const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        apiKey;
      const response = await axios({
        method: "GET",
        url: apiURL,
      });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log("Error is:", error.message);
      localStorage.removeItem("myCity", cityName);
      setDisplay("inline");
    }
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
    localStorage.setItem("myCity", inputCity);
    setDisplay("none");
  };

  useEffect(() => {
    getWeatherDetails(mycity);
  }, []);

  return (
    <div className="weather-container">
      {!mycity && (
        <div className="weather-input" style={{ display: display }}>
          <p className="weather-input-heading">Add your location</p>
          <input
            type="text"
            className="input-container"
            placeholder="Add Loaction"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Add
          </button>
        </div>
      )}

      {Object.keys(data).length > 0 && (
        <div className="weather-input">
          <p className="weatherTemp">
            {" "}
            {(data?.main?.temp - 273.15).toFixed(1)}°C
          </p>
          <p className="weatherCity">{data?.name}</p>
        </div>
      )}
    </div>
  );
}

export { Weather };
