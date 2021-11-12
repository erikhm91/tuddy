<template>
    <section>
        <p>Dette er Main-component.</p>
        <TaskList></TaskList>
    </section>
</template>

<script lang="ts">
    import { Options, Vue} from 'vue-class-component';
    import TaskList from './TaskList.vue';

    @Options({
        components: {  
            TaskList
        }
    })
    
    export default class Main extends Vue {}

</script>

<style>

section {
    background-color: rgb(211, 211, 211);
    border: 1px solid black;
}

</style>