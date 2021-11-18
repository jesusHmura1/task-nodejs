import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
