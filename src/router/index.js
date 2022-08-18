import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserChildren from "../views/UserChildren.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/start",
      name: "start",
      component: () => import("../views/StartView.vue"),
      beforeEnter: () => {
        const authenticated = true;
        if (!authenticated) {
          return false;
        }
      },
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "profile",
          component: UserChildren,
        },
      ],
    },
    {
      path: "/users/:id",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
