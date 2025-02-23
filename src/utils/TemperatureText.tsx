import { kelvinToCelcius } from "./TempConversion";

export function temperatureText(temperature: number, unit: number): string {
    if(unit==0){
        return kelvinToCelcius(temperature)+" ºC"
    }
    else{
        return temperature+" K"
    }
}

export function temperatureValue(temperature: number, unit: number): number {
    if(unit==0){
        return kelvinToCelcius(temperature)
    }
    else{
        return temperature
    }
}

