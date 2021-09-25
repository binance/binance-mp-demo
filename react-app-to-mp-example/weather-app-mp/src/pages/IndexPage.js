import React, { useEffect, useState, useCallback } from "react";
import { View, Text } from "@binance/mp-components";
import mpService from "@binance/mp-service";
import WeatherCard from "../components/weather";
import { REACT_APP_API_URL, REACT_APP_API_KEY } from "../constants";

import "./IndexPage.css";

function IndexPage() {
  const [data, setData] = useState([]);
  const lat = 1.364917;
  const long = 103.822872;

  const fetchData = useCallback(async () => {
    // For all the mpServices apis, please read:
    // https://developers.binance.com/docs/mini-program/framework/api
    await mpService
      .request({
        url: `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`,
      })
      .then(({ data }) => {
        console.log(data);
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // For all the mp-components, please read:
  // https://developers.binance.com/docs/mini-program/framework/components

  return (
    <View className="page">
      {typeof data.main != "undefined" ? (
        <WeatherCard weatherData={data} onRefresh={fetchData} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default IndexPage;
