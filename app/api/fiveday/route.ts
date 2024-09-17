import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      throw new Error("Missing OPENWEATHER_API_KEY in environment variables");
    }

    const lat = 40.4165; // Madrid's latitude
    const lon = -3.7026; // Madrid's longitude

    // Correct the API URL by adding https:// protocol
    const dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // Fetch the data from the API
    const dailyRes = await fetch(dailyUrl, {
      next: {
        revalidate: 3600, // Cache for 1 hour
      },
    });

    // Check if the response is okay (status code 2xx)
    if (!dailyRes.ok) {
      throw new Error(`Failed to fetch weather data: ${dailyRes.status} ${dailyRes.statusText}`);
    }

    const dailyData = await dailyRes.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.error("Error getting daily weather data: ", error);
    return new Response("Error getting daily data", { status: 500 });
  }
}
