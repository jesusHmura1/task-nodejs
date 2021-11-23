import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { PassengerService } from "src/passenger/passenger.service";
import { FlightDTO } from "./dto/flight.dto";
import { FlightService } from "./flight.service";

@Controller("api/v1/flight")
export class FlightController {
  constructor(
    private readonly flightService: FlightService,
    private readonly passengerService: PassengerService
  ) {}

  @Post()
  create(@Body() flightDTO: FlightDTO) {
    return this.flightService.created(flightDTO);
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.flightService.findById(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() flightDTO: FlightDTO) {
    return this.flightService.update(id, flightDTO);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.flightService.delete(id);
  }

  @Post(":flightId/passenger/:passengerID")
  async addPassangerToFlight(
    @Param("flightId") flightId: string,
    @Param("passengerID") passengerID: string
  ) {
    const passanger = await this.passengerService.findPassanger(passengerID);
    if (!passanger) {
      throw new HttpException("pasajero no encontrado", HttpStatus.NOT_FOUND);
    }
    return await this.flightService.addPassangerToFlight(flightId, passengerID);
  }
}
