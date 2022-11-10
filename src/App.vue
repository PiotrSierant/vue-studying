<template>
  <div class="my-app">
    <b-container>
      <TheCardAdd @add="add" />
      <transition name="fade" mode="out-in">
        <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
          <b-spinner variant="primary" />
        </div>

        <b-row key="2" v-else>
          <b-col sm="4" v-for="(user, nodeId) in users" :key="nodeId">
            <ComponentCardPlayer :name="user.name" :lastName="user.lastName" :nodeId="nodeId" @delete="remove" />
          </b-col>
        </b-row>
      </transition>
    </b-container>
  </div>
</template>

<script>
import TheCardAdd from './components/TheCardAdd.vue';
import ComponentCardPlayer from './components/ComponentCardPlayer.vue';
export default {
  data() {
    return {
      loading: true,
      users: [],
    };
  },
  components: {
    TheCardAdd,
    ComponentCardPlayer
  },
  methods: {
    async add(userData) {
      try {
        let { data } = await this.axios.post('https://vue-axios-5a565-default-rtdb.europe-west1.firebasedatabase.app/users.json', userData);
        this.$set(this.users, data.name, userData);
      } catch (error) {
        console.log(error.message)
      }
    },
    async remove(nodeId) {
      try {
        if (this.users[nodeId] === undefined) {
          throw 'NodeId doesnt exist';
        }
        await this.axios.delete(`https://vue-axios-5a565-default-rtdb.europe-west1.firebasedatabase.app/users/${nodeId}.json`)
        this.$delete(this.users, nodeId);
      }
      catch (error) {
        console.log(error.message)
      }
    }
  },
  async created() {
    try {
      let { data } = await this.axios.get('https://vue-axios-5a565-default-rtdb.europe-west1.firebasedatabase.app/users.json');
      this.users = data
      this.loading = false;
    } catch (error) {
      console.log(error.message)
    }
  },
}
</script>

<style>
.my-app {
  padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
