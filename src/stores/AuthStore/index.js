import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
	// STATES
	const isAuthorized = ref(true);

	return {
		isAuthorized,
	};
});
