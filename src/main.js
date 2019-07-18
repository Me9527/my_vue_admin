import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './styles/element-variables.scss'
// import Element01 from "./components/Element01";
// import HelloWorld from "./components/HelloWorld";
import router from './router'
// import Router from 'vue-router'
// import { getInfo } from '@/api/user'

Vue.config.productionTip = false

Vue.use(ElementUI);


// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})