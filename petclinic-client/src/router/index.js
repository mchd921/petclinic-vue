// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import OwnerDetail from '@/components/OwnerDetail.vue';
import OwnerList from '@/components/OwnerList.vue';

const routes = [
    {
        path: '/owner',
        name: 'OwnerList',
        component: OwnerList,
    },
    {
        path: '/owner/:id',
        name: 'OwnerDetail',
        component: OwnerDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
