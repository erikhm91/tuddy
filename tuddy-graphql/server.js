const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// const TaskDTO = require('./api/TaskDTO.ts').TaskDTO;
const JsonDataLayerFacade = require('./api/DataLayerFacade')
// import { JsonDataLayerFacade } from './api/DataLayerFacade'
// import { TaskDTO } from './api/TaskDTO';


console.log('jsondatalayer: ', JsonDataLayerFacade)
const fakeDatabase = new JsonDataLayerFacade()
// const fakeDatabase = []
const fakeDBArray = []


//schema: defintion of types and query
const schema = buildSchema(`
    type Task {
        id: String
        description: String
        status: String
    }

    input TaskInput {
        description: String
        status: String
    }

    type TaskList {
       getAllTasks : [Task]
    }

    type Mutation {
        addTask(description: String, status: String): Task
        addTaskJson(description: String, status: String): Task
    }

    type Query {
        task: Task
        taskList: TaskList
        hello: String
    }
`);


// taskList: TaskList

//implement types (resolver functions for "subqueries")
class Task {

    constructor(id) {
        this.id = id ? id : ''
        this.status = ''
        this.description = ''
    }

    setDescription(description) {
        this.description = description
    }

    setStatus(status) {
        this.status = status
    }
    

    getTask() {
        return "dette er en task!"
    }
}

class TaskList {

    getAllTasks() {
        const taskList = fakeDatabase.getTaskList();
        return taskList
    }
}

//Root resolver: the root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!'
    },
    task: () => {
        return new Task()
    },
    taskList: () => {
        return new TaskList()
    },

    //takes in argument args - use object destructuring in signature to assign to variables
    addTask: ( {description, status} ) => {
        const task = new Task(''+Math.floor(Math.random()*100))
        task.setDescription(description)
        task.setStatus(status)
        fakeDBArray.push(task)
        return task
    },

    addTaskJson: ( {description, status} ) => {
        //build instance of type Task
        const task = new Task(''+Math.floor(Math.random()*100))
        task.setDescription(description)
        task.setStatus(status)

        //send js obj (for json)
        taskObj = {}
        taskObj.id = task.id
        taskObj.description = task.description
        taskObj.status = task.status
        fakeDatabase.addData(task)

        //return Task instance
        return task
    },

    addTaskInput: ( {taskInput} ) => {
        const task = new Task(''+Math.random()*100)
        task.setDescription(taskInput.description)
        task.setStatus(taskInput.status)
        fakeDBArray.push(task)
        return task
    }
};

// Create a server:
const app = express()

// Use those to handle incoming requests:
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue : root,
    graphiql: true
}));

// Start the server:
app.listen(3000);
console.log("Server started on port 3000")