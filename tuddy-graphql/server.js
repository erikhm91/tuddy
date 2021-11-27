const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const fakeDatabase = []


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
        this.id = id
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
        return fakeDatabase
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
        fakeDatabase.push(task)
        return task
    }

    // addTask: ( {taskInput} ) => {
    //     const task = new Task(''+Math.random()*100)
    //     task.setDescription(taskInput.description)
    //     task.setStatus(taskInput.status)
    //     fakeDatabase.push(task)
    //     return task
    // }
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