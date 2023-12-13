import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import FullJobDetailsView from '../views/FullJobDetailsView.vue'
import navigationGuard from './navigationGuard';
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import { useAuthStore } from '@/stores/userStore';

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
      path: '/FormOne',
      name: 'FormOne',
      component: () => import('../views/FormOne.vue'),
      // meta: { requiresAuth: true }
    },
    {
      path: '/FormTwo',
      name: 'FormTwo',
      component: () => import('../views/FormTwo.vue'),
      // meta: { requiresAuth: true }
    },
    {
      path: '/FormThree',
      name: 'FormThree',
      component: () => import('../views/FormThree.vue'),
      // meta: { requiresAuth: true }
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: () => import('../views/myAccount.vue'),
      // meta: { requiresAuth: true }
    },
    {
      path: '/userForm',
      name: 'userForm',
      component: () => import('../views/userForm.vue'),
      meta: { requiresAuth: true }
    }
  ]
})


navigationGuard(router);

export default router

// let intendedDestination = null;

// // Navigation guard to check authentication status
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const isLoggedIn = authStore.isLoggedIn;

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Check if the route requires authentication
//     if (!isLoggedIn) {
//       intendedDestination = to.fullPath;
//       // Redirect to the login page if not logged in
//       next('/login');
//     } else {
//       // Continue to the requested route
//       next();
//     }
//   } else {
//     // For routes that don't require authentication, allow access
//     next();
//   }
// });

// export { router, intendedDestination };
