<template>
  <div id="app">
    <section class="height">
      <h1 v-padding v-if="!visible">Directive - Hooks {{ whichName ? 'Update' : 'componentUpdated'}}</h1>
    </section>
    <input 
      type="checkbox" 
      v-model="visible" 
      @click="visible = !visible"
    /> <span>{{ visible ? 'Pokaż' : 'Ukryj' }}</span>

    <input 
      type="checkbox" 
      v-model="whichName" 
      @click="whichName = !whichName"
    /> <span>Hooks || ComponendUpdated</span>
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
