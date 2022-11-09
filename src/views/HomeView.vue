<template>
  <div class="home">
    <div class="list-group margin-top">
      <li class="list-group-item active">Name: <b>{{name}}</b></li>
      <li class="list-group-item"><h3>React</h3> 
        <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{ width: react }">
              {{react}}
          </div>
      </div>
      </li>
      <li class="list-group-item"><h3>Vue</h3> 
        <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{ width: vue }">
              {{vue}}
          </div>
      </div></li>
      <li class="list-group-item"><h3>Node</h3> 
        <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{ width: node }">
              {{node}}
          </div>
      </div></li>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    name() {
            return this.$store.state.user.name
    },
    react(){
            return (this.$store.state.user.react) + '%'
        },
    vue(){
            return (this.$store.state.user.vue) + '%'
        },
    node(){
            return (this.$store.state.user.node) + '%'
        }
  }
}
</script>
<style>
  .home {
    width: 100%;
    max-width: 1366px;
  }
  .margin-top {
    width: 100%;
      margin-top: 2rem;
  }
</style>