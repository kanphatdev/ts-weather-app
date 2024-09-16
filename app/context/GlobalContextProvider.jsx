"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [pollution, setPollution] = useState({});
  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
     setForecast(res.data);
      
    } catch (error) {
      console.log(" Error fetching forecast data: ", error);
    }
  };
 const fetchPollution = async () =>{
  try {
    const res = await axios.get("api/pollution");
 
    
    setPollution(res.data)
  } catch (error) {
    console.log(" Error fetching pollution data: ", error);
  }
 }
  useEffect(() => {
    fetchForecast();
    fetchPollution();
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      forecast,
      pollution

     }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
