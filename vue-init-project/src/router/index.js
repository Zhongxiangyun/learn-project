import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainLayout from "../components/MainLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      hideInMenu: true,
      notCache: true,
      icon: "md-home"
    },
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        children: []
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
