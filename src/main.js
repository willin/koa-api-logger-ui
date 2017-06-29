import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import Detail from './component/detail';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: ':app', component: Detail, name: 'detail' }
    ]
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
