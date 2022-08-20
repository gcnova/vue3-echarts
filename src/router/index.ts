import {
    useRoute,
    createRouter,
    createWebHistory,
    createWebHashHistory,
    RouteRecordRaw,
  } from "vue-router";

  const defaultRouterList: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: { name: "home" },
      },
      {
        path: "/index",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
        meta: { title: "主页"},
      },
  ];

  export const allRoutes = [...defaultRouterList];

  const router = createRouter({
    history: createWebHashHistory(),
    routes: allRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          el: "#app",
          top: 0,
          behavior: "smooth",
        };
      }
    },
  });

  export default router;