<template>
  <div>
       <ComponentAnimation />
       <ComponentAnimation2 />
       <ComponentAnimation3 />
  </div>
</template>

<script>
import ComponentAnimation from './components/ComponentAnimation.vue';
import ComponentAnimation2 from './components/ComponentAnimation2.vue';
import ComponentAnimation3 from './components/ComponentAnimation3.vue';
export default {
    name: "App",
    components: {
      ComponentAnimation,
      ComponentAnimation2,
      ComponentAnimation3,
    },
}
</script>

<style>
html {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
}
header, section {
  padding: 1rem;
  width: 100%;
}
.btn {
  padding: 1rem 2rem;
}
</style>
