<template>
    <article>
      
        <p>Dette er Task-item.</p>
        <p>{{description}}</p>
        <p>Status: {{status}}</p>
        <button v-on:click="createInDatabase()">Lagre sak</button>
    </article>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import { TaskServiceFake } from '../services/services';
    
    export default class TaskItem extends Vue {
        id : string
        description : string
        status : string

        constructor(id: string, description: string) {
            super()
            this.id = id
            this.description = description
            this.status = 'Created'
        }

        createInDatabase() : void {
            const createdMessage = TaskServiceFake.createInBackend();           
            this.updateStatus(createdMessage);
        }

        updateStatus(status : string) : void {
            this.status = status;
        }
    }
    
    

</script>

<style>
.task-wrapper {
    background-color: wheat;
    border-radius: 8px;
    border-color: white;
    box-shadow: 0 0 25px rgb(0 0 0 / 5%);
}


</style>