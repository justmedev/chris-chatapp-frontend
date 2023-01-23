import HomePage from "../views/HomePage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes = [
    { path: '/', component: HomePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
