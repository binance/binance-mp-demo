import React, { useEffect, useState, useCallback } from "react";
import WeatherCard from "../components/weather";

import "./IndexPage.css";

function IndexPage() {
  const [data, setData] = useState([]);
  const lat = 1.364917;
  const long = 103.822872;

  const fetchData = useCallback(async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page">
      {typeof data.main != "undefined" ? (
        <WeatherCard weatherData={data} onRefresh={fetchData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default IndexPage;
