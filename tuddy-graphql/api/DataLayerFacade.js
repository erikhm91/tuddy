// import * as db from "../db.json";
// import { TaskDTO } from "./TaskDTO";
const DBFILENAME = 'db.json'
const db = require('../' + DBFILENAME)

class JsonDataLayerFacade {

  constructor() {
    this._taskList = this.readData();
    this._dbFilepath = '../' + DBFILENAME
  }

  getTaskList() {
      this._taskList = this.readData()
      return this._taskList
  }

  persistData() {}

  writeFile(jsonData) {
    var fs = require("fs");
    fs.writeFile(this._dbFilepath, jsonData, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  addData(obj) {
    this._taskList.push(obj)
    const json = JSON.stringify(this._taskList)
    console.log('json: ', json
    )
    this.writeFile(json)

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
