import { IPassenger } from "./passanger.interface";
import { IWeather } from "./weather.interface";

export class IFlight {
  pilot: string;
  airplaine: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
  weather: IWeather[];
}
