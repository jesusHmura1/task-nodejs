import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";
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
}
