<template>
  <div id="app">
    <ComponentPlayerCharacter />
  </div>
</template>

<script>
import ComponentPlayerCharacter from './components/ComponentPlayerCharacter.vue';


export default {
    name: "App",
    components: { ComponentPlayerCharacter }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
