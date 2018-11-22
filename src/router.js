import Vue from "vue";
import Router from "vue-router";
import HomeView from "./components/HomeView/HomeView.vue";
import Outsource from "./components/Outsource.vue";
import ApplyJob from "./components/ApplyJob/ApplyJob.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/outsource",
      name: "outsource",
      component: Outsource
    },
    {
      path: "/apply",
      name: "apply",
      component: ApplyJob
    }
  ]
});
