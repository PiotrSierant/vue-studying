import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
