"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Sun,
} from "lucide-react";
import moment from "moment";
import { kelvinToCelsius } from "@/app/util/misc";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DailyForecast = () => {
  const { forecast, dailyForecast } = useGlobalContext();
  const { city, list } = dailyForecast;
  const { weather } = forecast;
  if (!dailyForecast || !city || !list) {
    return (
      <div className="capitalize">
        <Skeleton className=" h-[12rem] w-full " />
      </div>
    );
  }
  if (!forecast || !weather) {
    return (
      <div className="capitalize">
        <Skeleton className=" h-[12rem] w-full " />
      </div>
    );
  }
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];
  const { main: WeatherMain } = weather[0];
  //  filter today's forecast list
  const todaysForecastList = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt.startsWith(todayString);
    }
  );
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
  return (
    <div
      className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
    dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <div className="h-full flex gap-10 overflow-hidden">
        {todaysForecastList.length < 1 ? (
          <div className="">
            <Alert>
              <AlertDescription>
          <h1 className="text-[3rem] line-through text-rose-500 capitalize">
            no data available
          </h1>
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todaysForecastList.map(
                  (forecast: { dt_txt: string; main: { temp: number } }) => {
                    return (
                      <CarouselItem
                        key={forecast.dt_txt}
                        className="flex flex-col gap-4 basis-[8.5rem] cursor-grab"
                      >
                        <p className="text-gray-300">
                          {moment(forecast.dt_txt).format("HH:mm")}
                        </p>
                        <p className="">{getIcons()}</p>
                        <p className="mt-4">
                          {kelvinToCelsius(forecast.main.temp)}°C
                        </p>
                      </CarouselItem>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyForecast;
