import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class FlightDTO {
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  readonly airplaine: string;
  @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @IsNotEmpty()
  @IsDateString()
  readonly flightDate: Date;
}
