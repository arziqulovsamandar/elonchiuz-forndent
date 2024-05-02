import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import HomeView from '../views/HomeView.vue'
import auth from "./auth"
import admin from "./admin"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, admin]
})

router.beforeResolve((to, from, next) => {
  nProgress.start()
  return next()
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.path !== "/") return next({ path: "/" });
  else if (token && to.path == "/") return next({ path: "/admin" });

  return next();
});


router.afterEach(() => {
  nProgress.done()
})

export default router
