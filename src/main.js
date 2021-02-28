import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from 'netlify-identity-widget';
Vue.config.productionTip = false;
import GoTrue from "gotrue-js";

//initialize netlify identity
netlifyIdentityWidget.init();

//initialize GoTruejs
export const auth = new GoTrue({
  APIUrl: 'https://vue-admin-dashboard-fo.netlify.app/.netlify/identity',
  audience: '',
  setCookie: true,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
