import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false
Vue.use(BootstrapVue)
// const reaction = () => {
//   alert('Klikniety')
// }

Vue.directive('padding', {
  bind(element) {
    // bind uzywamy do pojedynczego elementu, nie mamy dostępu do rodzica
    element.style.textAlign = 'center';
    element.style.fontSize = '4rem';

    // element.addEventListener('click', reaction);
  },

  inserted(element) {
    // dzięki inserted mamy dostęp do dziecka i do rodzica
    element.parentNode.style.padding = '1rem';
    element.parentNode.style.backgroundColor = 'black';
  },

  // unbind(element) {
  //   usuwa zdarzenia przed usunieciem elementu z dom
  //   element.removeEventListener('click', reaction);
  // },
  update(element) {
    console.log('update', element.innerHTML);
  },
  componentUpdated(element) {
    console.log('ComponentUpdate', element.innerHTML);
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
