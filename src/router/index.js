import Dashboard from "../components/Dashboard/Dashboard.vue";
import User from "../components/User/User.vue";
import Product from "../components/Product/Product.vue";
import Report from "../components/Report/Report.vue";
import Analytic from "../components/Analytic/Analytic.vue";
import Setting from "../components/Setting/Setting.vue";
import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard },
  { path: "/user", component: User },
  { path: "/product", component: Product },
  { path: "/report", component: Report },
  { path: "/analytic", component: Analytic },
  { path: "/setting", component: Setting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
