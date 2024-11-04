import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/Categorias/caballeros',
                    name: 'caballeros',
                    component: () => import('@/views/Categorias/caballeros.vue')
                }
            ]
        }
    ]
});

export default router;
