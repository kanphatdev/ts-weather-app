import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
            const lat = 40.4165
            const lon = -3.7026
         const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
         const response = await axios.get(url);
         return NextResponse.json(response.data)
    } catch (error) {
        console.log("Error getting in pollution",error);
        
        return new Response("Error fetching air pollution data", { status: 500 })
    }
}