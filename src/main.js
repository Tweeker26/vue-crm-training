import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: 'AIzaSyCmE0VF2dFa4ziXpQIIXowngCmyPAvkawY',
  authDomain: 'vue-crm-training-1e2b7.firebaseapp.com',
  databaseURL: 'https://vue-crm-training-1e2b7.firebaseio.com',
  projectId: 'vue-crm-training-1e2b7',
  storageBucket: 'vue-crm-training-1e2b7.appspot.com',
  messagingSenderId: '201184567066',
  appId: '1:201184567066:web:f3ed45f107afef7974d6a3',
  measurementId: 'G-1RGPN7LT4S',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
