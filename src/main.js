import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
Vue.directive('padding', {
  inserted(element) {
    element.style.padding = '1rem';
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
