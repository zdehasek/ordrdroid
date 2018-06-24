import Vue from 'vue'

import GSignInButton from 'vue-google-signin-button';

import App from './App'

Vue.use(GSignInButton);

app = new Vue({
  el: '#app',
  render: h => h(App)
})

