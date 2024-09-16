"use client";
import { useGlobalContext } from "@/app/context/GlobalContextProvider";
import { wind } from "@/app/util/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const Wind = () => {
  const { forecast } = useGlobalContext();
  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;
  if (!windSpeed || !windDir) {
    return (
      <div className="capitalize">
        <Skeleton className=" h-[12rem] w-full " />
      </div>
    );
  }
  return (
    <div
      className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex 
    flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <h2 className=" flex items-center gap-2 font-medium capitalize">
        {wind} wind
      </h2>
      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.svg"
            alt="compass"
            width={110}
            height={110}
          />
          <Image
            src="/compass_arrow.svg"
            alt="compass"
            width={11}
            height={11}
             className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
             style={{
                transform: `rotate(${windDir}deg) translateX(-50%)`,
                height: "100%",
              }}
          />
        </div>
        <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium">
            {Math.round(windDir) } m/s
        </p>
      </div>
    </div>
  );
};

export default Wind;
