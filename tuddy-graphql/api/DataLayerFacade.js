// import * as db from "../db.json";
// import { TaskDTO } from "./TaskDTO";
const db = require('../db.json')

class JsonDataLayerFacade {
  _taskList

  constructor() {
    this._taskList = this.readData();
  }

  getTaskList() {
      return this._taskList
  }

  persistData() {}

  writeFile(jsonData, filename) {
    var fs = require("fs");
    fs.writeFile("../db.json", jsonData, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
 

  readData() {
    const array= [];
    db.forEach((obj) => {
      const task = { id : obj.id, description : obj.description, status : obj.status }
      array.push(task);
    });
    return array;
  }
}

module.exports = JsonDataLayerFacade
