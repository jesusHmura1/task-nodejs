import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class TaskDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsArray({ each: true }) // permite valildar cada uno de los casos dentro del array sea del tipo indicado
  readonly case: number;
}
