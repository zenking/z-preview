<template>
  <div id="app">
    <HelloWorld :info-data=""/>
  </div>
</template>

<script>
import ZPreview from './components/preview'

export default {
  name: 'app',
  components: {
    ZPreview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
