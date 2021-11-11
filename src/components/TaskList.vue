<template>
    <ol>
        <li v-for="task in tasks" :key="task.id">    
        </li>
        <TaskItem></TaskItem>

        <button v-on:click="refreshTaskList()">Oppdater oppgaveliste</button>
    </ol>
</template>

<script lang="ts">
    import { Options, Vue }  from 'vue-class-component';
    import TaskItem from './TaskItem.vue';
    import { TaskServiceFake } from '../services/services';
    
    @Options({
        components: {  
            TaskItem
        },
    })
   
    export default class TaskList extends Vue {
        tasks: typeof TaskItem[] = [];

        created() {
            // this.refreshTaskList();
        }

        refreshTaskList() : void {
            // this.tasks = TaskServiceFake.fetchTasks();
        }
      
    }

</script>

<style>
ol {
    position: relative;
    max-width : 50%;
    background-color: red;
    border: 1px solid blue;
    list-style-type: none;
}

</style>