"use client";
import { useGlobalContext } from '@/app/context/GlobalContextProvider';
import { people } from '@/app/util/Icons';
import { formatNumber } from '@/app/util/misc';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const Population = () => {
    const { dailyForecast } = useGlobalContext();
    const { city } = dailyForecast;
    if (!dailyForecast || !city) {
        return <Skeleton className="h-[12rem] w-full" />;
      }
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
              <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {people} Population
        </h2>
        <p className="pt-4 text-2xl">{formatNumber(city.population)}</p>
      </div>
      <p className="text-sm">Latest UN population data for {city.name}.</p>
    </div>
    
  )
}

export default Population