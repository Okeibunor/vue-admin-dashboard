import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Signin from "../views/Auth/signin.vue";
import Request from "../views/Auth/request.vue";
import Recover from "../views/Auth/recover.vue";
import * as netlifyIdentityWidget from 'netlify-identity-widget';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin
  },
  {
    path: "/recover",
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

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  })
  if (requiresAuth && !currentUser) {
    next("signin")
  } else {
    next();
  }
})

export default router;
