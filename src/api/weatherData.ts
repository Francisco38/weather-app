export type WeatherData = {
    name: string;
    coord: {
      lon: number,
      lat: number
    }
    sys: {
        country: string;
    };
    dt: number;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    rain?: {
        "1h"?: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
};

export type ExtendedForecastData = {
    city: {
        name: string;
        country: string;
    };
    list: {
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            humidity: number;
        };
        rain: {
            "3h": number;
        };
        wind: {
            speed: number;
        };
        weather: {
            description: string;
            icon: string;
        };
    }[];
}

export type ResumedForecastData = {
    city: {
        name: string;
        country: string;
    };
    days: {
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
    }[];
}

