import React from 'react';
import clearSkyIcon from '../assets/01d.svg';
import fewCloudsIcon from '../assets/02d.svg';
import scatteredCloudsIcon from '../assets/03d.svg';
import brokenCloudsIcon from '../assets/04d.svg';
import showerRainIcon from '../assets/09d.svg';
import rainIcon from '../assets/10d.svg';
import thunderStormIcon from '../assets/11d.svg';
import snowIcon from '../assets/13d.svg';
import mistIcon from '../assets/50d.svg';

interface IWeatherIconProps {
    code: String;
}

const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
    let Icon: string;

    switch (props.code) {
        case "01d":
            Icon = clearSkyIcon;
            break;

        case "02d":
            Icon = fewCloudsIcon;
            break;

        case "03d":
            Icon = scatteredCloudsIcon;
            break;

        case "04d":
            Icon = brokenCloudsIcon;
            break;

        case "09d":
            Icon = showerRainIcon;
            break;

        case "10d":
            Icon = rainIcon;
            break;
        
        case "11d":
            Icon = thunderStormIcon;
            break;

        case "13d":
            Icon = snowIcon;
            break;

        case "50d":
            Icon = mistIcon;
            break;

        default:
            Icon = clearSkyIcon;
    }
    return <img src={Icon} alt="Logo" />;
};

export default WeatherIcon;