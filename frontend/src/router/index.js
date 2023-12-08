import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import FullJobDetailsView from '../views/FullJobDetailsView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLanding from '../components/Admin/AdminLanding.vue'
import AddJob from '../components/Admin/AddJob.vue'
import GeneralForm from '../components/Forms/GeneralForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/apply',
      name: 'apply',
      component: FullJobDetailsView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLanding
    },
    {
      path: '/addjob',
      name: 'addjob',
      component: AddJob
    },
    {
      path: '/form',
      name: 'GeneralForm',
      component: GeneralForm
    },

  ]
})

export default router
