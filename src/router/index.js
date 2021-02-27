import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Signin from "../views/Auth/signin.vue";
import Request from "../views/Auth/request.vue";
import Recover from "../views/Auth/recover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/revover",
    name: "Recover",
    component: Recover
  },
  {
    path: "/request",
    name: "Request",
    component: Request
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
