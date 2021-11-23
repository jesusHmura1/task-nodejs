import { IsDateString, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FlightDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly airplaine: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly flightDate: Date;
}
