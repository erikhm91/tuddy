<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <p>Just started up tuddy-vue with TS!</p>
  <Main/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Main from './components/Main.vue';
// import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    // Header,
    Main,
    // Footer
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
