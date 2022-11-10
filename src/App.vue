<template>
  <div id="app">
    <b-container>
      <b-alert v-font-size="size" show variant="primary" v-shadow>
        Primary Alert
      </b-alert>
      Change size <input type="number" v-model="size">
      <hr>
      <b-alert v-my-on:click="click" show variant="danger" v-shadow="'rgba(255, 0, 0, .5)'">
        Click
      </b-alert>
      <b-alert v-my-on:click="click" show variant="danger" v-shadow="color">
        <input type="text" v-model="color">
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
      color: 'rgba(25, 50, 250, .5)',
    }
  },
  methods: {
    click() {
      console.log(this.color);
    }
  },
  directives: { // dyrektywy lokalnie
    //   shadow: {
    //     bind(element, binding) {
    //       const color = binding.value ? binding.value : 'rgba(255, 255, 0, .5)';
    //       element.style.boxShadow = `10px 10px 36px 0 ${color}`;

    //     if (binding.modifiers['red']) {
    //       element.style.boxShadow = '10px 10px 36px 0 rgba(255, 0, 0, .5)';
    //     }
    //   },
    //    update(element, binding) {
    //     const color = binding.value ? binding.value : 'rgba(255, 255, 0, .5)';
    //     element.style.boxShadow = `10px 10px 36px 0 ${color}`;
    //   }
    // },
    shadow(element, binding) {
      const color = binding.value ? binding.value : 'rgba(255, 255, 0, .5)';
      element.style.boxShadow = `10px 10px 36px 0 ${color}`;

    },
    // zamiast używać dwóch na raz możemy zrobić funkcje z shadow jak wyżej 
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
