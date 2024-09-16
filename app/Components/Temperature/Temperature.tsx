"use client";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { kelvinToCelsius } from "@/app/util/misc";
import {
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Navigation,
  Sun,
} from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Temperature = () => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;
  if (!forecast || !weather) {
    return (
      <div className="capitalize">
        <Skeleton className=" h-[12rem] w-full col-span-2 md:col-span-full" />
      </div>
    );
  }

  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);
  // states
  const [localTime, setLocalTime] = useState<string>("");
  const [CurrentDay, setCurrentDay] = useState<string>("");

  const { main: WeatherMain, description } = weather[0];

  const getIcons = () => {
    switch (WeatherMain) {
      case "Drizzle":
        return <CloudDrizzle size={30} />;
      case "Rain":
        return <CloudRain size={30} />;
      case "Snow":
        return <CloudSnow size={30} />;
      case "Clear":
        <Sun size={30} />;
      case "Clouds":
        return <Cloudy size={30} />;
      default:
        return <CloudSun size={30} />;
    }
  };
  //   live time update
  useEffect(() => {
    // update time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      //   custom time format: 24 hours format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of week
      const dayOfWeek = localMoment.format("dddd");
      setLocalTime(formatedTime);
      setCurrentDay(dayOfWeek);
    }, 1000);
  }, []);

  return (
    <div className="pt-6 pb-5 px-4 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <p className="flex justify-between items-center">
        <span className="font-medium">{CurrentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span className="">{name}</span>
        <span className="">
          <Navigation />
        </span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>
      <div className="">
        <div className="">
          <span className="">{getIcons()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex gap-2 items-center">
          <span className="capitalize">low : {minTemp}°</span>
          <span className="capitalize">hight : {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
