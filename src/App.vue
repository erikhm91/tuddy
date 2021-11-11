<template>
  <header>
    <h1>Tuddy</h1>
    <h3>Fåre gjort a, brur!</h3>
  </header>
  
  <Main class="main"/>
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
  box-sizing: border-box;
}

header {
  margin-bottom: 30px;
}
header h1 {
  margin-bottom: 0;
}
header h3 {
  margin-top: 0.5rem;
}

.main {
  width : 95vw;
  max-width: 700px;
  margin: auto;
  min-height: 300px;
  font-size: 1.2rem;
}
</style>
