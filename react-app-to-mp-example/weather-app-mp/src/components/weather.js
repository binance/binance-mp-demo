import React from "react";
import { View, Text, Button } from "@binance/mp-components";
import moment from "moment";
import "./weather.css";

const WeatherCard = ({ weatherData, onRefresh }) => {
  // Replace all the Html tags:
  // <div />    →   <View />
  // <p />      →   <Text />
  // <button /> → <Button />
  // for more components, please reference to:
  // https://developers.binance.com/docs/mini-program/framework/components

  return (
    <View className="main">
      <View className="top">
        <Text className="header">{weatherData.name}</Text>
        <Button className="button" onClick={onRefresh}>
          🔄
        </Button>
      </View>
      <View className="flex">
        <Text className="day">
          {moment().format("dddd")}, <Text>{moment().format("LL")}</Text>
        </Text>
        <View className="flex">
          <Text className="description">{weatherData.weather[0].main}</Text>
        </View>
      </View>

      <View className="flex">
        <Text className="temp">Temprature: {weatherData.main.temp} &deg;C</Text>
        <Text className="temp">Humidity: {weatherData.main.humidity} %</Text>
      </View>

      <View className="flex">
        <Text className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </Text>
        <Text className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </Text>
      </View>
    </View>
  );
};

export default WeatherCard;
