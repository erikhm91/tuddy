import { ITaskController } from "./ITaskController";
import { Task } from "./Task";
import { IGraphQLFacade } from "@/api/graphQLFacade";

export class TaskController implements ITaskController {
    repo : IGraphQLFacade
    
    constructor(repo : IGraphQLFacade) {
      this.repo = repo;
    }
  
    createTask(): void {
      const query = '{"data": {"hello": "Hello world!"}}'
      const response = this.repo.post(query, r => {console.log(r)});
    }
  
    fetchTasks(): Task[] {
      console.log('fetchTasks was called in TaskServiceGraphQL')
      return null;
    }
  
    updateTask(task: Task): void {
      console.log("update task was called in TaskServiceGraphQL");
    }
  
   
}