// navigationGuard.js
import { useAuthStore } from '@/stores/userStore';

let intendedDestination = null;

export default function navigationGuard(router) {
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const isLoggedIn = authStore.isLoggedIn;

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        intendedDestination = to.fullPath;
        next('/login');
      } else {
        next();
      }
    } else {
      next();
    }
  });
};

export {intendedDestination}

