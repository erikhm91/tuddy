import { BaseTask, Task } from "./Task";
import { IGraphQLFacade } from "../api/graphQLFacade";

export interface ITaskController {
  createTask(): void
  fetchTasks(): Task[]
  updateTask(task: Task): void
}







