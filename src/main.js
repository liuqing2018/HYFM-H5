import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import store from './vuex/index';
import router from './routers/index';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
