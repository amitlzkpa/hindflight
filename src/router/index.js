import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Profile from '@/views/Profile.vue';
import Page404 from "@/views/Page404.vue";

import { authGuard } from "@/auth/authGuard";

Vue.use(VueRouter);


const routes =
[
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: route => "App: Home"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: route => "App: About"
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: route => "App: Profile"
    },
    beforeEnter: authGuard,
  },
  {
    path: "*",
    component: Page404,
    meta: {
      title: route => "App: Unknown"
    }
  }
];


const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes
});


router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title(to);
  }
  next();
});


export default router;