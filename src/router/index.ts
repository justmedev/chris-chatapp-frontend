import HomePage from "../views/HomePage.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import ChatPage from "../views/ChatPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/chat',
        name: 'chat',
        component: ChatPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
