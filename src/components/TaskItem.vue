<template>
    <article class="task-wrapper">
        <h3>Oppgave nr. <b>{{ id }}</b></h3>
        <p>{{description}}</p>
        <p>Status: {{}}</p>
        <button v-on:click="complete()">Fullfør</button>
        
    </article>
</template>

<script lang="ts">
    import { Vue} from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'
    import { TaskService } from '../services/services'
    import { Task, TaskStatus} from '../domain/Task'

    export default class TaskItem extends Vue {
        @Prop()
        task!: Task

        id : string = null; //null to make reactive
        description : string = null;
        status : TaskStatus

        created() {
                 this.id = "12"
            this.description = "hallo"
            this.status = TaskStatus.Created
        }

        mounted() {
            this.id = this.task.getId();
            this.description = this.task.getDescription();

        
        //     this.id = task.getId();
        //     this.description = task.getDescription();
        //     this.status = task.getStatus();
        //     this._props = new Props();
        }

        complete() : void {
            //propagate up to tasklist - tasklist contacts the service.
            console.log('complete clicked')
        }

    }

</script>

<style>
.task-wrapper {
    margin: 20px;
    background-color: wheat;
    border-radius: 8px;
    border-color: white;
    box-shadow: 0 0 25px rgb(0 0 0 / 5%);
}


</style>