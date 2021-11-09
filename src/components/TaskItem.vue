<template>
    <div>
        <p>Dette er Task-item.</p>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    
    export default class Main extends Vue {
        
        get message(): string {
            return `Hello, mister Erik!`
        }
    }
    

</script>

<style>

section {
    background-color: rgb(211, 211, 211);
}

</style>