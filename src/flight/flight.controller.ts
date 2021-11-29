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
  UseGuards,
} from "@nestjs/common";
import { PassengerService } from "src/passenger/passenger.service";
import { FlightDTO } from "./dto/flight.dto";
import { FlightService } from "./flight.service";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { jwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags("Flight")
@Controller("api/v1/flight")
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
export class FlightController {
  constructor(
    private readonly flightService: FlightService,
    private readonly passengerService: PassengerService
  ) {}

  @Post()
  @ApiOperation({ summary: "Created new Fligts" })
  create(@Body() flightDTO: FlightDTO) {
    return this.flightService.created(flightDTO);
  }

  @Get()
  @ApiOperation({ summary: "Get all Fligts" })
  findAll() {
    return this.flightService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get one Fligt" })
  findById(@Param("id") id: string) {
    return this.flightService.findById(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update flight" })
  update(@Param("id") id: string, @Body() flightDTO: FlightDTO) {
    return this.flightService.update(id, flightDTO);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deleted Fligt" })
  delete(@Param("id") id: string) {
    return this.flightService.delete(id);
  }

  @Post(":flightId/passenger/:passengerID")
  @ApiOperation({ summary: "Add passenger to flight" })
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
