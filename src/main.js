import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

const reaction = () => {
  alert('Klikniety')
}

Vue.directive('padding', {
  bind(element) {
    // bind uzywamy do pojedynczego elementu, nie mamy dostępu do rodzica
    element.style.textAlign = 'center';
    element.style.fontSize = '4rem';

    element.addEventListener('click', reaction);
  }, 
  
  inserted(element) {
    // dzięki inserted mamy dostęp do dziecka i do rodzica
    element.parentNode.style.padding = '1rem';
    element.parentNode.style.backgroundColor = 'black';
  }, 

  unbind(element) {
    // usuwa zdarzenia przed usunieciem elementu z dom
    element.removeEventListener('click', reaction);
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
