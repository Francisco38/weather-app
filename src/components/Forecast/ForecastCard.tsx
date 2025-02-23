import { ResumedForecastData } from '../../api/weatherData';
import WeatherIcon from '../WeatherIcon';
import { temperatureText, temperatureValue } from '../../utils/TemperatureText';
import { ForecastCardContainer, ForecastCardItem } from './ForecastCardStyles';


interface IForecastCardProps {
    data: ResumedForecastData;
    onForecastClick: (unit: number) => void;
    selectedDay: number;
    unit: number;
}

const ForecastCard: React.FC<IForecastCardProps> = (IForecastCardProps) => {


    return (
        <div>
            <h2>5-Day Forecast</h2>
            <ForecastCardContainer>
                {IForecastCardProps.data.days.map((day: any, index: number) => (
                    <ForecastCardItem
                        onClick={() => IForecastCardProps.onForecastClick(index)}
                        style={{
                            backgroundColor: IForecastCardProps.selectedDay === index ? 'lightgray' : 'transparent', 
                        }}
                    >
                        <h3>{day.week_day}</h3>
                        <WeatherIcon code={day.weather[0].icon} />
                        <h3>{temperatureValue(day.temp_min, IForecastCardProps.unit)}-{temperatureText(day.temp_max, IForecastCardProps.unit)}</h3>
                    </ForecastCardItem>
                ))}
            </ForecastCardContainer>
        </div>
    );
}

export default ForecastCard