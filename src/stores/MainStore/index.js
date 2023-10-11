import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', () => {
	// STATES
	const isSidebarOpen = ref(false);

	// ACTIONS
	const setSidebarState = (value) => {
		isSidebarOpen.value = value;
	};

	return {
		isSidebarOpen,
		setSidebarState,
	};
});
