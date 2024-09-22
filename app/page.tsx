import Navbar from "./Components/Navbar";
import Temperature from "./Components/Temperature/Temperature";
import Airpollution from "./Components/Airpollution/Airpollution";
import Sunset from "./Components/Sunset/Sunset";
import Wind from "./Components/Wind/Wind";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import UvIndex from "./Components/UvIndex/UvIndex";
import Population from "./Components/Population/Population";
import FeelsLike from "./Components/FeelsLike/FeelsLike";
import Humidity from "./Components/Humidity/Humidity";
import Visibility from "./Components/Visibility/Visibility";
import Pressure from "./Components/Pressure/Pressure";
import Mapbox from "./Components/Mapbox/Mapbox";
import defaultStates from "./util/defaultStates";
import Image from "next/image";
import FiveDayForecast from "./Components/FiveDayForecast/FiveDayForecast";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />

      {/* Main content */}
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        {/* Temperature Component (left side) */}
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast/>
        </div>

        {/* Air Pollution Components (right side) */}
        <div className="flex flex-col w-full">
          <div className=" instruments  grid h-full gap-4 col-span-full sm2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <Airpollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <Mapbox />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="capitalize flex items-center gap-2 font-medium">
                top large cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultStates.map((state, index) => {
                  return (
                    <div className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none" key={index}>
                      <p className="px-6 py-4">{state.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          Made by
          <Image src={"/logo-white.svg"} alt="logo" width={20} height={20} />
          <a
            href="https://thecodedealer.com"
            target="_blank"
            className=" text-green-300 font-bold"
          >
            TheCodeDealer
          </a>
        </p>
      </footer>
    </main>
  );
}
