import { Injectable } from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";
import { ITask, StatusItask } from "src/commons/interfaces/task.interfaces";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(TaskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...TaskDTO,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  fineOne(id: string): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: string, TaskDTO: TaskDTO): StatusItask {
    const newTask = { id: id, ...TaskDTO };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    const newTaskStatus = {
      status: "completado",
      task: newTask,
    };
    return newTaskStatus;
  }

  deleted(id: string): string {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return "tarea eliminada";
  }
}
