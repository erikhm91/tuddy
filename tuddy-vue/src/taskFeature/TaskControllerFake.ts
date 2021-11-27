import { ITaskController } from "./ITaskController";
import { Task, BaseTask } from "./Task";
import { IGraphQLFacade } from "@/api/graphQLFacade";

export class TaskControllerFake implements ITaskController {

    constructor(repo : IGraphQLFacade) {
      // const taskArray = new Array<Task>();
      // taskArray.push(new BaseTask("1", "Undersøke TV før black friday"));
      // taskArray.push(
      //   new BaseTask("14", "Undersøke dyson støvsuger før black friday")
      // );
    }
  
    createTask(): void {
      //
    }
  
    getRandomId(): number {
      return Math.floor(Math.random()*100)
    }
  
    fetchTasks(): Task[] {
      //TODO: get tasks serialized object from database
  
      //TODO: map task to Task-objects
  
      const taskArray = new Array<Task>();
      let id = ''+ this.getRandomId();
      taskArray.push(new BaseTask(id, "Undersøke TV før black friday"));
      id = ''+ this.getRandomId();
      taskArray.push(new BaseTask(id, "Undersøke dyson støvsuger før black friday"));
      // return taskArray;
      return taskArray;
    }
  
    updateTask(task: Task): void {
      console.log("update task fired in taskServiceFake");
    }
  }