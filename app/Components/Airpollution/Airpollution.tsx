"use client";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { thermo } from "@/app/util/Icons";
import { airQulaityIndexText } from "@/app/util/misc";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function AirPollution() {
  const { pollution } = useGlobalContext();

  // check if airQuality is available, check if necessary properties are available
  if (
    !pollution ||
    !pollution.list ||
    !pollution.list[0] ||
    !pollution.list[0].main
  ) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const airQualityIndex = pollution.list[0].main.aqi * 10;

  const filteredIndex = airQulaityIndexText.find((item) => {
    return item.rating === airQualityIndex;
  });

  return (
    <div
      className="air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air Pollution
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress" />
      <p className="text-sm capitalize">Air quality is {filteredIndex?.description}. </p>
    </div>
  );
}

export default AirPollution;