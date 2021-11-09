<template>
    <p>Dette er Main-component.</p>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    
    export default class Main extends Vue {
        
        get message(): string {
            return `Hello, mister Erik!`
        }
    }
    

</script>