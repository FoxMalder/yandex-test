// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue';
import vSelect from 'vue-select';
import App from './App';
import store from './store/index';
import './assets/btn.less';

Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
