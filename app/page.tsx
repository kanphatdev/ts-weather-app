import Navbar from "./Components/Navbar";
import Temperature from "./Components/Temperature/Temperature";
import Airpollution from "./Components/Airpollution/Airpollution";
import Sunset from "./Components/Sunset/Sunset";
import Wind from "./Components/Wind/Wind";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import UvIndex from "./Components/UvIndex/UvIndex";
import Population from "./Components/Population/Population";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />

      {/* Main content */}
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        
        {/* Temperature Component (left side) */}
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>

        {/* Air Pollution Components (right side) */}
        <div className="flex flex-col w-full">
          <div className=" instruments  grid h-full gap-4 col-span-full sm2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <Airpollution />
           <Sunset/>
          <Wind/>
          <DailyForecast/>
          <UvIndex/>
          <Population/>
          </div>
        </div>
      </div>
    </main>
  );
}
