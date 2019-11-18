import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/task/:id",
        name: "task",
        component: () =>
          import(
            /* webpackChunkName: "taskDetails" */ "../components/TaskDetails.vue"
          )
      }
    ]
  },
  {
    path: "/page/:number",
    name: "paginated-page",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
