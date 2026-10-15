import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
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
    history: createWebHistory(),
    routes: routes
})

export default router