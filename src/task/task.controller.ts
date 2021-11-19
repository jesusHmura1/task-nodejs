import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Controller("api/v1/task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  created(@Body() TaskDTO: TaskDTO) {
    return this.taskService.create(TaskDTO);
  }

  @Get()
  findall() {
    return this.taskService.findAll();
  }

  @Get(":id")
  fineOne(@Param("id") id: string) {
    return this.taskService.fineOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() TaskDTO: TaskDTO) {
    return this.taskService.update(id, TaskDTO);
  }

  @Delete(":id")
  deleted(@Param("id") id: string) {
    return this.taskService.deleted(id);
  }
}
