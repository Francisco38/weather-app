import { useEffect } from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, LayersControl, useMap } from "react-leaflet";
import { Separator } from "../styles";

const API_KEY = "7899c9ca42a409bff5e3fd77bdbfdc68";

const RecenterMap = ({ center }: { center: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center);
    }, [center, map]);

    return null;
};

const WeatherMap: React.FC<{ center: [number, number] }> = ({ center }) => {
    const zoomLevel = 12;

    return (
        <Separator>
            <h2>Weather map</h2>
            <MapContainer
                center={center}
                zoom={zoomLevel}
                style={{ width: "100%", height: "300px", borderRadius: "20px" }}
            >

                <RecenterMap center={center} />

                <TileLayer
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                    attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
                <LayersControl position="topright" >
                    <LayersControl.BaseLayer name="Temperature" checked={true}>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Wind">
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Precipitation">
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </Separator>

    );
}

export default WeatherMap;