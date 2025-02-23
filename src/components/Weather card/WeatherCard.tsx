import { ResumedForecastData, WeatherData } from '../../api/weatherData';
import WeatherIcon from '../WeatherIcon';
import { dateFromUTC } from '../../utils/DateFromUTC';
import { temperatureText } from '../../utils/TemperatureText';
import { CurrentWeatherContainer, CurrentWeatherStatus } from './WeatherCardStyles';

interface IWeatherCardProps {
    weatherData: WeatherData;
    forecastData: ResumedForecastData;
    selectedDay: number;
    unit: number;
}

const WeatherCard: React.FC<IWeatherCardProps> = (IWeatherCardProps) => {
    if(IWeatherCardProps.selectedDay==0){
        return (
            <CurrentWeatherContainer>
                <h2>Current Weather</h2>
                <h3>{dateFromUTC(IWeatherCardProps.weatherData.dt)}</h3>
                <CurrentWeatherStatus>
                    <WeatherIcon code={IWeatherCardProps.weatherData.weather[0].icon} />
                    <h3>{temperatureText(IWeatherCardProps.weatherData.main.temp, IWeatherCardProps.unit)}</h3>
                </CurrentWeatherStatus>
                <h4>{IWeatherCardProps.weatherData.weather[0].description.charAt(0).toUpperCase() + IWeatherCardProps.weatherData.weather[0].description.slice(1)}</h4>
                <CurrentWeatherStatus>
                    {IWeatherCardProps.weatherData.rain?.['1h'] && <p>Rain:{IWeatherCardProps.weatherData.rain?.['1h']} mm/h</p>}
                </CurrentWeatherStatus>
                <p>Wind speed: {IWeatherCardProps.weatherData.wind.speed} m/s</p>
                <p>Humidity: {IWeatherCardProps.weatherData.main.humidity} %</p>
            </CurrentWeatherContainer>
        );
    }
    else{
        const data=IWeatherCardProps.forecastData.days[IWeatherCardProps.selectedDay];
        console.log(data)
        const description = Array.isArray(data.weather) ? data.weather[0].description : data.weather.description;
        return (
            <CurrentWeatherContainer>
                <h2>Current Weather</h2>
                <h3>{dateFromUTC(data.list[0].dt)}</h3>
                <CurrentWeatherStatus>
                    <WeatherIcon code={data.weather.icon} />
                    <h3>{temperatureText(data.temp_max, IWeatherCardProps.unit)}-{temperatureText(data.temp_min, IWeatherCardProps.unit)}</h3>
                </CurrentWeatherStatus>
                <h4>{description.charAt(0).toUpperCase() + description.slice(1)}</h4>
                <p>Rain: {data.rain} mm/h</p>
                <p>Wind speed: {data.wind_speed} m/s</p>
                <p>Humidity: {data.humidity} %</p>
            </CurrentWeatherContainer>
        );
    }
}

export default WeatherCard;