import { BaseTask, Task } from "../domain/Task";

export interface TaskService {
  createTask(): string;
  fetchTasks(): Task[];
  updateTask(task: Task): void;
}

export class TaskServiceFake implements TaskService {
  // tasks: Task[] = null;

  constructor() {
    // const taskArray = new Array<Task>();
    // taskArray.push(new BaseTask("1", "Undersøke TV før black friday"));
    // taskArray.push(
    //   new BaseTask("14", "Undersøke dyson støvsuger før black friday")
    // );
  }

  createTask(): string {
    return "id task created";
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

export class TaskServiceGraphQL implements TaskService {
  constructor() {

  }

  createTask(): string {
    console.log('createTask was called in TaskServiceGraphQL')
    return null;
  }

  fetchTasks(): Task[] {
    console.log('fetchTasks was called in TaskServiceGraphQL')
    return null;
  }

  updateTask(task: Task): void {
    console.log("update task was called in TaskServiceGraphQL");
  }

  callHelloWorld(): Promise<string> {
    var query = '{query: "{ hello }"}'
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })
      .then(r => r.json())
      .then(data => {   
            console.log('data returned:', data);
            return data
    });



  }
}


