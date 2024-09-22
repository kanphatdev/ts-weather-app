"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  // forecast state
  const [forecast, setForecast] = useState({});
  // air quality state
  const [pollution, setPollution] = useState({});
  // 5 days forecast state
  const [dailyForecast, setDailyForecast] = useState({});
  // uv index state
  const [uvIndex, setUvIndex] = useState({});
  //  fetch the forecast data function
  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      setForecast(res.data);
    } catch (error) {
      console.log(" Error fetching forecast data: ", error);
    }
  };
  // fetch air quality data function
  const fetchPollution = async () => {
    try {
      const res = await axios.get("api/pollution");

      setPollution(res.data);
    } catch (error) {
      console.log(" Error fetching pollution data: ", error);
    }
  };
  // fetch 5 days forecast data function
  const fetchfiveDaysForecast = async () => {
    try {
      const res = await axios.get("api/fiveday");
      setDailyForecast(res.data);
    } catch (error) {}
  };
  // fetch uv index function
  const fetchUvIndex = async () => {
    try {
      const res = await axios.get("api/uv");

      setUvIndex(res.data);
    } catch (error) {
      console.log("Error fetch uv index", error);
    }
  };
  useEffect(() => {
    fetchForecast();
    fetchPollution();
    fetchfiveDaysForecast();
    fetchUvIndex();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        forecast,
        pollution,
        dailyForecast,
        uvIndex,
      }}
    >
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
