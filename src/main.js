import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { dictionary } from "./dictionary.js";

Vue.config.productionTip = false;
Vue.prototype.$dict = dictionary;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
