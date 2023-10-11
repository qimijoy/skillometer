import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import { useAuthStore } from '@/stores/AuthStore';

const router = createRouter({
	history: createWebHistory(process.env.NODE_ENV === 'production' ? '/skillometer/' : '/'),
	routes: [
		{
			path: '/auth',
			name: 'Auth',
			component: () => import('../views/AuthView.vue'),
			meta: { layout: 'AuthLayout', needAuth: false },
		},
		{
			path: '/',
			name: 'Home',
			component: HomeView,
			meta: { layout: 'MainLayout', needAuth: true },
		},
		{
			path: '/skillometer/:skill?/:difficulty?',
			name: 'Skillometer',
			component: () => import('../views/SkillometerView.vue'),
			meta: { layout: 'MainLayout', needAuth: true },
		},
	],
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	const isAuthorized = authStore.isAuthorized;

	// Does route need auth?
	const needAuth = to.matched.some((record) => record.meta.needAuth);

	if (needAuth && !isAuthorized) {
		next('/auth');
	} else {
		next();
	}
});

export default router;
