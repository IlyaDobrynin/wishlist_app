import { createRouter, createWebHistory } from 'vue-router';
import Gallery from '../Pages/Gallery.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: Gallery,
    },
  ]
});

export default router