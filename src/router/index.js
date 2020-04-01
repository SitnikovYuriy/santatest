import Vue from "vue";
import VueRouter from "vue-router";
import First from "../views/First.vue";
import { dictionary } from "../dictionary.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: dictionary.first,
    component: First
  },
  {
    path: "/second",
    name: dictionary.second,
    component: () =>
      import(/* webpackChunkName: "second" */ "../views/Second.vue")
  },
  {
    path: "/third",
    name: dictionary.third,
    component: () =>
      import(/* webpackChunkName: "third" */ "../views/Third.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
