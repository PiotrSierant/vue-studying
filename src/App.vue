<template>
  <div id="app" class="my-app">
    <b-container>
      <TheCardAdd @add='add' />
      <ComponentCardPlayer :name="'Piotr'" :last-name="'Sierant'" />
    </b-container>
  </div>
</template>
<script>
import TheCardAdd from './components/TheCardAdd.vue';
import ComponentCardPlayer from './components/ComponentCardPlayer.vue';
export default {
  name: 'app',
  components: {
    TheCardAdd,
    ComponentCardPlayer,
  },
  methods: {
    add(userData) {
      console.log(userData);
    }
  }
}
</script>
<style>
body,
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  color: #111;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.my-app {
  margin-top: 2rem;
  width: 100%;
}
</style>
