import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'


const Vue =  createApp(App);

Vue.config.productionTip = false;

Vue.use(store).use(router).mount('#app')
