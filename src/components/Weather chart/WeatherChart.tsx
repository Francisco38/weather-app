import React from 'react';
import { Line } from 'react-chartjs-2';
import { ResumedForecastData} from '../../api/weatherData';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { hourFromUTC } from '../../utils/DateFromUTC';
import { temperatureValue } from '../../utils/TemperatureText';
import { WeatherChartContainer } from './WeatherChartStyles';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IWeatherChartProps {
    forecastData: ResumedForecastData;
    unit: number;
    selectedDay: number;
}


const WeatherChart: React.FC<IWeatherChartProps> = (IWeatherChartProps) => {
    const selectedDay = IWeatherChartProps.forecastData.days[IWeatherChartProps.selectedDay]; 

    console.log(selectedDay)
    const chartData = {
        labels: selectedDay.list.map(entry => hourFromUTC(entry.dt)), 
        datasets: [
            {
                label: "Max Temperature",
                data: selectedDay.list.map(entry => temperatureValue(entry.main.temp_max,IWeatherChartProps.unit)),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
                tension: 0.4,
            }
        ]
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: IWeatherChartProps.unit === 0 ? "Temperature (°C)" : "Temperature (K)", 
                    font: {
                        size: 14,
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Time", 
                    font: {
                        size: 14,
                    },
                },
            }
        }
    };

    return(
        <WeatherChartContainer> 
            <h2>Temperature Evolution</h2>
            <Line data={chartData} options={options} />;
        </WeatherChartContainer>
    )
}

export default WeatherChart;