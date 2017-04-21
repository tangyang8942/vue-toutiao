import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'

import moment from 'moment'
import animate from 'animate.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: '/src/assets/imgs/imgerror.jpg',
  loading: '/src/assets/imgs/imgloading.gif',
  preLoad: 1,
  attempt: 1
});
Vue.use(iView);
Vue.use(ElementUI);
Vue.use(moment);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
