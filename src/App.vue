<template>
  <div>
       <ComponentAnimation />
  </div>
</template>

<script>
import ComponentAnimation from './components/ComponentAnimation.vue';
export default {
    name: "App",
    components: {
      ComponentAnimation
    },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
header,section {
  padding: 1rem;
}
</style>
