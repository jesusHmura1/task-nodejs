export interface ITask {
  id?: string;
  description: string;
  isDone: boolean;
}

export interface StatusItask {
  status: string;
  task: ITask;
}
