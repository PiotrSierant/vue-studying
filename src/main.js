import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

axios.defaults.baseURL = 'https://vue-axios-5a565-default-rtdb.europe-west1.firebasedatabase.app';
axios.defaults.headers.common['Authorization'] = 'xxx';
axios.defaults.headers.get = 'secret';

// const requestInterceptor = axios.interceptors.request.use(config => {
//   console.log('Intercept request', config);
// });

// const responseInterceptor = axios.interceptors.response.use(res => {
//   console.log('Intercept response', res);
// });

// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.request.eject(responseInterceptor);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App)
}).$mount('#app');