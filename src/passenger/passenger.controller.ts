import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PassengerDTO } from "./dto/passanger.dto";
import { PassengerService } from "./passenger.service";

@Controller("api/v1/passenger")
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}
  @Post()
  created(@Body() passangerDTO: PassengerDTO) {
    return this.passengerService.created(passangerDTO);
  }
  
  @Get()
  findAll(){
      return this.passengerService.findAll();
  }

  @Get(':id')
  findPassanger(@Param('id') id:string){
      return this.passengerService.findPassanger(id);
  }

  @Put(':id')
  updatePassanger(@Param('id') id:string, @Body() passangerDTO:PassengerDTO){
      return this.passengerService.update(id, passangerDTO);
  }

  @Delete(':id')
  deletePassanger(@Param('id') id:string){
      return this.passengerService.delete(id);
  }

}
