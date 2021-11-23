import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IFlight } from "src/commons/interfaces/flight.interface";
import { ILocation } from "src/commons/interfaces/location.interface";
import { FLIGHT } from "src/commons/models/models";
import { FlightDTO } from "./dto/flight.dto";
import axios from "axios";
import * as moment from "moment";
import { IWeather } from "src/commons/interfaces/weather.interface";

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<IFlight>
  ) {}

  async getLocation(destinationCity: string): Promise<ILocation> {
    const { data } = await axios.get(
      `https://www.metaweather.com/api/location/search/?query=${destinationCity}`
    );

    return data[0];
  }

  async getWeather(woeid: number, flightDate: Date): Promise<IWeather[]> {
    const dateFormat = moment.utc(flightDate).format();
    const year = dateFormat.substring(0, 4);
    const month = dateFormat.substring(5, 7);
    const day = dateFormat.substring(8, 10);
    const { data } = await axios.get(
      `https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}`
    );
    return data;
  }

  async created(flightDTO: FlightDTO): Promise<IFlight> {
    const newflight = new this.model(flightDTO);
    return await newflight.save();
  }

  async findAll(): Promise<IFlight[]> {
    return await this.model.find().populate("passengers");
  }

  async findById(id: string): Promise<IFlight> {
    const flight = this.model.findById(id).populate("passengers");
    const location: ILocation = await this.getLocation(
      (
        await flight
      ).destinationCity
    );
    const weather: IWeather[] = await this.getWeather(
      location.woeid,
      (
        await flight
      ).flightDate
    );
    return await flight;
  }

  async update(id: string, flightDTO: FlightDTO): Promise<IFlight> {
    return await this.model.findByIdAndUpdate(id, flightDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      msg: "eliminado",
    };
  }

  async addPassangerToFlight(
    flightId: string,
    passangerId: string
  ): Promise<IFlight> {
    return await this.model
      .findByIdAndUpdate(
        flightId,
        {
          $addToSet: { passengers: passangerId },
        },
        { new: true }
      )
      .populate("passengers");
  }
}
