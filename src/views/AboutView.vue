<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-danger" @click="goBack">Go back!</button>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
