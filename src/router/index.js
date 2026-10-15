import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/HCM'
    },
    {
        path : '/HCM',
        component: ()=>import('../components/admin/HCM/index.vue')
    },
    {
        path : '/LSĐ',
        component: ()=>import('../components/admin/LSD/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
