// import * as db from "../db.json";
// import { TaskDTO } from "./TaskDTO";

export interface IDataLayerFacade {}

export class JsonDataLayerFacade {
  private _taskList: TaskDTO[];

  constructor() {
    this._taskList = this.readData();
  }

  getTaskList() : TaskDTO[] {
      return this._taskList
  }

  persistData(): void {}

  writeFile(jsonData: JSON, filename: string) {
    var fs = require("fs");
    fs.writeFile("../db.json", jsonData, function (err: string) {
      if (err) {
        console.log(err);
      }
    });
  }

  readData(): TaskDTO[] {
    const array: TaskDTO[] = [];
    // db.forEach((obj) => {
    //   const task = new TaskDTO(obj.id, obj.description, obj.status);
    //   array.push(task);
    // });
    return array;
  }
}
