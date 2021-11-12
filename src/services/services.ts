// import {TaskItemType} from '../components/TaskItem.vue'
import {BaseTask, Task} from '../domain/Task'

export interface TaskService {
    createTask() : string
    fetchTasks() : Task[]
    updateTask(): void
}

export class TaskServiceFake implements TaskService {
     
    createTask() : string {
        return 'id task created';
    }

    fetchTasks() : Task[] {
        //TODO: get tasks serialized object from database

        //TODO: map task to Task-objects
        
        const taskArray = new Array<Task>();
        taskArray.push(new BaseTask('1', 'Undersøke TV før black friday'));
        taskArray.push(new BaseTask('14', 'Undersøke dyson støvsuger før black friday'));
        // return taskArray;
        return taskArray
    }

    updateTask(): void {
        console.log('updating task')
    }

}


