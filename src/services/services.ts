// import {TaskItemType} from '../components/TaskItem.vue'

export class TaskServiceFake {
    static createInBackend() : string {
        return 'task created';
    }

    static fetchTasks() : string {
        
        
        // const taskArray = new Array<typeof TaskItemType>();
        // taskArray.push(new TaskItemType('132', 'Undersøke TV før black friday'));
        // taskArray.push(new TaskItemType('32', 'Undersøke dyson støvsuger før black friday'));
        // return taskArray;
        return ''
    }

}



