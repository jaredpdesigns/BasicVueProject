import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "./registerServiceWorker";
import Head from "vue-headful";

Vue.component("Head", Head);
Vue.use(require("vue-moment"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
