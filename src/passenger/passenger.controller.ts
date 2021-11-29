import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { PassengerDTO } from "./dto/passanger.dto";
import { PassengerService } from "./passenger.service";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { jwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags("Passenger")
@Controller("api/v1/passenger")
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}
  @Post()
  @ApiOperation({ summary: "Created new Passenger" })
  created(@Body() passangerDTO: PassengerDTO) {
    return this.passengerService.created(passangerDTO);
  }

  @Get()
  @ApiOperation({ summary: "Get all Passengers" })
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get one Passenger" })
  findPassanger(@Param("id") id: string) {
    return this.passengerService.findPassanger(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update Passenger" })
  updatePassanger(@Param("id") id: string, @Body() passangerDTO: PassengerDTO) {
    return this.passengerService.update(id, passangerDTO);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deleted Passenger" })
  deletePassanger(@Param("id") id: string) {
    return this.passengerService.delete(id);
  }
}
