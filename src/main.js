import Vue from 'vue'
import App from './App.vue'
import 'assets/css/base.css'
import router from './router/index'
Vue.config.productionTip=false
const x=new Vue({
    render: h => h(App),
    router:router,
  }).$mount('#app')
  console.log('x',x)

