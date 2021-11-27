<template>
  <div>
    <div class="ty-bar">
      <button class="ty-button ty-red" v-on:click="refreshTaskList()">Oppdater oppgaveliste</button>
      <button class="ty-button ty-green" v-on:click="addTask()">Ny oppgave</button>
    </div>
    <ol class="ty-task-list">
      <li v-for="task in tasks" :key="task.getId()">
        <TaskItem :task="task" :service="taskService" @completeTaskEvent="completeTask(task)"></TaskItem>
      </li>
    </ol>
    <!-- <p>Dette er tasklist</p>
    <TaskItem :task="getTask()" :service="taskService"></TaskItem> -->

    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TaskItem from "./TaskItem.vue";
import { Task, TaskStatus } from '../Task'
import { TaskControllerFake } from "../TaskControllerFake";
import { ITaskController } from '../ITaskController';
import { FakeGraphQLFacade } from '../FakeGraphQLFacade'

@Options({
  components: {
    TaskItem,
  },
})
export default class TaskList extends Vue {
  tasks: Task[] = null
  taskService: ITaskController = null;

  created(): void {
    this.taskService = new TaskControllerFake(new FakeGraphQLFacade);
    this.refreshTaskList();
  }

  refreshTaskList(): void {
    const fetchedTasks = this.taskService.fetchTasks();

    this.tasks = []
    fetchedTasks.forEach((task) => {
      if (task.getStatus() === TaskStatus.Created) {
        this.tasks.push(task);
      }
    });
  }

  completeTask(task : Task): void {
    console.log('event completetask fired in tasklist')
    task.completeTask()
    this.taskService.updateTask(task)
  }

  addTask() {
    console.log('add task fired')
  }
}
</script>

<style>
.ty-task-list {
  /* position: relative;
  max-width: 50%; */
  /* background-color: red; */
  /* border: 1px solid blue; */
  list-style-type: none;
}

.ty-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}




</style>
