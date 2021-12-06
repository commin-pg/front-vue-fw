import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home'), // 동적 import
  },
  {
    path: '/error',
    name: 'ErrorPage',
    component: () => import('./views/ErrorPage'),
  },
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
  });