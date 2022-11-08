<template>
  <div id="app">
    <ComponentNavigation />
    <router-view/>
  </div>
</template>
<script>
import ComponentNavigation from '@/components/ComponentNavigation.vue';
export default {
  name: 'app',
  components: {
    ComponentNavigation,
  },
}
</script>
<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
