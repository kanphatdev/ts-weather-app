# Project README

## Tech Stack

This project uses the following technologies and tools:

| Technology        | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Next.js**       | A React framework for building server-side rendered and static web applications. |
| **TypeScript**    | A statically typed superset of JavaScript that provides type safety and improves code quality. |
| **JavaScript**    | A high-level, dynamic programming language used for web development. |
| **Tailwind CSS**  | A utility-first CSS framework for creating custom designs without leaving your HTML. |
| **Shadcn**        | A design system providing pre-built components for React applications. |
| **Lucide Icons**  | A collection of open-source icons for use in web applications. |
| **React**         | A JavaScript library for building user interfaces with component-based architecture. |
| **Axios**         | A promise-based HTTP client for making API requests in JavaScript. |

## Environment Variable

The project requires the following environment variable to be set:

- `OPENWEATHER_API_KEY=<your-openweather-api-key>`

Make sure to set this variable in a `.env.local` file at the root of your project.

## API Reference

The project integrates with the following external APIs for weather data:

| API Name          | Base URL                                             | Description                                                                 |
|-------------------|------------------------------------------------------|-----------------------------------------------------------------------------|
| **OpenWeather**   | [https://api.openweathermap.org/](https://api.openweathermap.org/) | Provides weather data for various locations around the globe. Requires an API key for access. |
| **Open-Meteo**    | [https://api.open-meteo.com/](https://api.open-meteo.com/)         | A free weather API that provides forecast data without requiring an API key. |


