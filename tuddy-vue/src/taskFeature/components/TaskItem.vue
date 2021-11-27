<template>
    <article class="task-wrapper">
        <h3>Oppgave nr. <b>{{ id }}</b></h3>
        <p>{{description}}</p>
        <p>Status: {{status}}</p>
        <button class="ty-button ty-green ty-button-complete" v-on:click="complete()">Fullfør</button>
        
    </article>
</template>

<script lang="ts">
    import { Vue} from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'
    import { Task, TaskStatus} from '../Task'

    export default class TaskItem extends Vue {
        @Prop()
        task!: Task

        id : string = null; //null to make reactive
        description : string = null;
        status : string = null;

        mounted() {
            this.id = this.task.getId()
            this.description = this.task.getDescription()
            this.status = this.task.getStatus()
        }       

        complete() : void {
            //propagate up to tasklist - tasklist contacts the service.
            console.log('complete clicked')
            this.$emit('completeTaskEvent', this.task)
            this.status = this.task.getStatus()
        }
    }

</script>

<style>
.task-wrapper {
    margin: 10px;
    background-color: wheat;
    border-radius: 8px;
    border-color: white;
    box-shadow: 0 0 25px rgb(0 0 0 / 5%);
}

.ty-button-complete {
    margin: 0.5rem 0 1rem 0;
    width: 8rem;
}

</style>