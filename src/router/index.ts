import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ChatPage from '@/views/ChatPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import feathersClient from '@/feathers-client';
import { provide } from "vue";

export enum Route {
  HOME = 'home',
  LOGIN = 'login',
  SIGNUP = 'signup',
  CHAT = 'chat',
}

type RouteRecordRawWithMeta = RouteRecordRaw & {
  meta?: {
    requiresAuth?: boolean,
  },
}

const routes: RouteRecordRawWithMeta[] = [
  {
    path: '/',
    name: Route.HOME,
    component: HomePage,
  },
  {
    path: '/login',
    name: Route.LOGIN,
    component: LoginPage,
  },
  {
    path: '/signup',
    name: Route.SIGNUP,
    component: SignupPage,
  },
  {
    path: '/chat',
    name: Route.CHAT,
    component: ChatPage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if ((to as unknown as RouteRecordRawWithMeta).meta?.requiresAuth) {
    await feathersClient.authenticate()
      .then(() => next())
      .catch(() => router.replace({ name: Route.LOGIN, query: { redirect: to.path } }));
  } else {
    next();
  }
});

export default router;
