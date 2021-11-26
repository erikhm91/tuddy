import { BaseTask, Task } from "../domain/Task";
import { IRepository } from "../repositories/repositories";

export interface ITaskService {
  createTask(): void
  fetchTasks(): Task[]
  updateTask(task: Task): void
}

export class TaskServiceFake implements ITaskService {

  constructor(repo : IRepository) {
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

export class TaskService implements ITaskService {
  repo : IRepository
  
  constructor(repo : IRepository) {
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



