// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './main.css';
import App from './App'
import router from './router'


Vue.config.productionTip = false;

Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
