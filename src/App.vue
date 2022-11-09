<template>
  <div id="app">
    <section class="height">
      <h1 v-padding v-if="!visible">Directive</h1>
    </section>
    <input 
      type="checkbox" 
      v-model="visible" 
      @click="visible = !visible"
    /> <span v-if="visible">Pokaż</span>
    <span v-else>Ukryj</span>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      visible: false,
    }
  }
}
</script>
<style>
body, *, *::after, *::before {
  padding: 0;
  margin: 0;
  background-color: rgb(228, 228, 228);
  color: #111;
}
.height {
  min-height: 10vh;
}
</style>
