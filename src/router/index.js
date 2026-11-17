import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import DescubreView from '../views/DescubreView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/descubre',
      name: 'descubre',
      component: DescubreView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
  ],
})

export default router
