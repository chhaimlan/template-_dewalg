import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Casino from "../views/Casino.vue";
import Goslots from "../views/Goslots.vue";
import Hbslots from "../views/Hbslots.vue";
import Pgslots from "../views/Pgslots.vue";
import Poker from "../views/Poker.vue";
import Sa from "../views/Sa.vue";
import Slots from "../views/Slots.vue";
import Sports from "../views/Sports.vue";
import Sliderimg from "../views/Sliderimg.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Formlogin",
    component: () => import("../views/Formlogin.vue")
  },
  {
    path: "/casino",
    name: "Casino",
    component: Casino
  },
  {
    path: "/slots",
    name: "Slots",
    component: Slots
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports
  },
  {
    path: "/sa",
    name: "Sa",
    component: Sa
  },
  {
    path: "/pgslots",
    name: "Pgslots",
    component: Pgslots
  },
  {
    path: "/poker",
    name: "Poker",
    component: Poker
  },
  {
    path: "/hbslots",
    name: "Hbslots",
    component: Hbslots
  },
  {
    path: "/goslots",
    name: "Goslots",
    component: Goslots
  },
  {
    path: "/index",
    name: "Index",
    component: Index
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/sliderimg",
    name: "Sliderimg",
    component: Sliderimg
  },
  {
    path: "/bonus",
    name: "Bonus",
    component: () => import("../views/Bonus.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
