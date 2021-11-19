import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
