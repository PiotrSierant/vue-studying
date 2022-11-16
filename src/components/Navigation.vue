<template>
  <b-nav fill tabs>
    <router-link to="/" tag="li" class="nav-item">
      <b-nav-item :active="$route.name === 'home'">Home</b-nav-item>
    </router-link>
    <router-link to="/register" tag="li" class="nav-item" v-if="!auth">
      <b-nav-item :active="$route.name === 'register'">Dołącz do nas</b-nav-item>
    </router-link>
    <router-link to="/login" tag="li" class="nav-item" v-if="!auth">
      <b-nav-item :active="$route.name === 'login'">Zaloguj się</b-nav-item>
    </router-link>
    <router-link to="/protected" tag="li" class="nav-item" v-if="auth">
      <b-nav-item :active="$route.name === 'protected'">Dla zalogowanych</b-nav-item>
    </router-link>
  </b-nav>
</template>

<script>
export default {
  name: 'navigationComponent',
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style scoped>

</style>