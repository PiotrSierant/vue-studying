<template>
  <div id="app">
    <div>
      <b-alert show variant="primary">Primary Alert</b-alert>
      <b-alert show variant="secondary">Secondary Alert</b-alert>
      <b-alert show variant="success">Success Alert</b-alert>
      <b-alert show variant="danger">Danger Alert</b-alert>
      <b-alert show variant="warning">Warning Alert</b-alert>
      <b-alert show variant="info">Info Alert</b-alert>
      <b-alert show variant="light">Light Alert</b-alert>
      <b-alert show variant="dark">Dark Alert</b-alert>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      visible: false,
      whichName: true,
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
