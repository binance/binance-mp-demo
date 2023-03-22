import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "@binance/bmp-components";
import { request } from "@binance/bmp-api";
import { useRouter } from "@binance/bmp-react";
import WeatherCard from "../components/weather";
import {
  REACT_APP_API_KEY,
  REACT_APP_API_URL,
  REACT_APP_API_HOST,
} from "../constants";

function DetailPage() {
  const [data, setData] = useState([]);
  const { city } = useRouter().params;

  const fetchData = useCallback(async () => {
    // For all the mpServices apis, please read:
    // https://developers.binance.com/docs/mini-program/framework/api

    // Request for the weather info
    const { data: results } = await request({
      url: `${REACT_APP_API_HOST}/geo/1.0/direct?q=${city}&appid=${REACT_APP_API_KEY}`,
    });

    if (results.length > 0) {
      const { lat, lon } = results[0];
      const { data } = await request({
        url: `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`,
      });

      setData(data);
    }
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

export default DetailPage;
