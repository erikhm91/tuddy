<template>
  <div class="task-list">
    <p>Dette er tasklist</p>
    <TaskItem :task="getTask()" :service="taskService"></TaskItem>

    <button v-on:click="refreshTaskList()">Oppdater oppgaveliste</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TaskItem from "./TaskItem.vue";
import { Task, BaseTask } from '../domain/Task'
import { TaskService, TaskServiceFake } from "../services/services"

@Options({
  components: {
    TaskItem,
  },
})
export default class TaskList extends Vue {
   tasks: Task[] = []
   taskService : TaskService = null

   created() {
       this.taskService = new TaskServiceFake()
   }

  refreshTaskList(): void {
    this.tasks = this.taskService.fetchTasks();
    console.log('fetched tasks: ', this.tasks)
    this.tasks.forEach( task => {
        console.log(task.getId(), task.getDescription(), task.getStatus())
    } )
  }

  getTask(): Task {
      return new BaseTask('1', 'legge seg i senga')
  }
}
</script>

<style>
.task-list {
  /* position: relative;
  max-width: 50%; */
  background-color: red;
  border: 1px solid blue;
  list-style-type: none;
}
</style>
