<template>
  <div id="app">
    <b-container>
      <b-alert v-font-size="size" show variant="primary">
        Primary Alert
        <input type="text" v-model="size">
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
