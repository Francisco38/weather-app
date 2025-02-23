import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, LayersControl, useMap } from "react-leaflet";
import { Separator } from "../styles";

const RecenterMap = ({ center }: { center: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center);
    }, [center, map]);

    return null;
};

const WeatherMap: React.FC<{ center: [number, number] }> = ({ center }) => {
    const [zoomLevel, setZoomLevel] = useState(12);

    const handleZoomChange = (e: any) => {
        setZoomLevel(e.target._zoom);
    };

    return (
        <Separator>
            <h2>Weather map</h2>
            <MapContainer
                center={center as [number, number]}
                zoom={zoomLevel}
                style={{ width: "100%", height: "300px", borderRadius: "20px" }}
                onZoomEnd={handleZoomChange}
            >

                <RecenterMap center={center} />

                <TileLayer
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                    attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
                <LayersControl position="topright" >
                    <LayersControl.BaseLayer name="Temperature" checked="Temperature">
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=ef2a138ac931533017acc75b6662f085`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Wind">
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=ef2a138ac931533017acc75b6662f085`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Precipitation">
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=ef2a138ac931533017acc75b6662f085`}
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </Separator>

    );
}

export default WeatherMap;