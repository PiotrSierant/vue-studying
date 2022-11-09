<template>
  <div id="app">
    <b-container>
      <b-alert v-font-size="size" show variant="primary">
        Primary Alert
      </b-alert>
      Change size <input type="number" v-model="size">
      <hr>
      <b-alert v-my-on:click="click" show variant="danger">
        Click
      </b-alert>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      size: 2,
    }
  },
  methods: {
    click() {
      alert('Hello! My new directive! I use args...')
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
  background-color: rgb(228, 228, 228);
  color: #111;
}

.height {
  min-height: 10vh;
}
</style>
