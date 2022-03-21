import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/SignInView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
