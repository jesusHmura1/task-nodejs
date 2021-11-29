import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";
import { TaskService } from "./task.service";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { jwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags("Tasks")
@Controller("api/v1/task")
@ApiBearerAuth()
@UseGuards(jwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: "Created new Task" })
  @UsePipes(new ValidationPipe())
  created(@Body() TaskDTO: TaskDTO) {
    return this.taskService.create(TaskDTO);
  }

  @Get()
  @ApiOperation({ summary: "Get all Tasks" })
  findall() {
    return this.taskService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get one Task" })
  fineOne(@Param("id") id: string) {
    return this.taskService.fineOne(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update Task" })
  update(@Param("id") id: string, @Body() TaskDTO: TaskDTO) {
    return this.taskService.update(id, TaskDTO);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deleted Task" })
  deleted(@Param("id") id: string) {
    return this.taskService.deleted(id);
  }
}
