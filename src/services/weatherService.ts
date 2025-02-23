import axios from "axios";
import { WeatherData, ExtendedForecastData, ResumedForecastData } from '../api/weatherData';
import { getNextSevenDays } from '../utils/GetDays';

const API_KEY = "7899c9ca42a409bff5e3fd77bdbfdc68";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherForecast = async (city: String): Promise<ResumedForecastData | null> => {
    try {
        const response = await axios.get<ExtendedForecastData>(FORECAST_URL, {
            params: {
                q: city,
                appid: API_KEY
            },
        });
        const fullForecast = response.data;

        const summarizedForecast = summarizeForecast(fullForecast);

        return summarizedForecast;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};

const summarizeForecast = (forecastData: ExtendedForecastData): ResumedForecastData => {
    const groupedData: Record<
        string,
        {
            week_day: string;
            temp_min: number;
            temp_max: number;
            weather: {
                description: string;
                icon: string;
            };
            wind_speed: number;
            humidity: number;
            rain: number;
            list: {
                dt: number;
                main: {
                    temp: number;
                    temp_min: number;
                    temp_max: number;
                };
            }[];
        }
    > = {};

    var i = 0;
    const weekDay = getNextSevenDays()

    console.log(weekDay.toString())
    console.log(forecastData)

    forecastData.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000)
        const datestamp = date.toISOString().split("T")[0]; // Get YYYY-MM-DD
        const hour = date.getHours()

        if (!groupedData[datestamp]) {
            groupedData[datestamp] = {
                week_day : weekDay[i],
                wind_speed : entry.wind.speed,
                weather: entry.weather,
                temp_min: entry.main.temp_min,
                temp_max: entry.main.temp_max,
                list: [],
                rain : entry.rain?.["3h"] || 0,
                humidity : entry.main.humidity
            };
            i++;
        }

        if (hour == 12) {
            groupedData[datestamp].weather = entry.weather
            groupedData[datestamp].wind_speed = entry.wind.speed
            groupedData[datestamp].rain = entry.rain?.["3h"] || 0
            groupedData[datestamp].humidity = entry.main.humidity
        }

        groupedData[datestamp].list.push({
            dt: entry.dt,
            main: {
                temp: entry.main.temp,
                temp_min: entry.main.temp_min,
                temp_max: entry.main.temp_max,
            },
        });
        groupedData[datestamp].temp_min = Math.min(groupedData[datestamp].temp_min, entry.main.temp_min);
        groupedData[datestamp].temp_max = Math.max(groupedData[datestamp].temp_max, entry.main.temp_max);
    });

    console.log(groupedData)
    return { city: forecastData.city, days: Object.values(groupedData) };
};

export const getCurrentWeather = async (city: String): Promise<WeatherData | null> => {
    try {
        const response = await axios.get<WeatherData>(WEATHER_URL, {
            params: {
                q: city,
                appid: API_KEY
            },
        });

        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};