<template>
	<div class="skillometer">
		<SKillHeader />

		<div class="skillometer__content">
			<SkillSidebar class="skillometer__sidebar" v-if="isSidebarOpen" />

			<RouterView class="skillometer__view" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import SKillHeader from '@/components/TheHeader.vue';
import SkillSidebar from '@/components/TheSidebar.vue';

const mainStore = useMainStore();

// COMPUTED
const isSidebarOpen = computed(() => mainStore.isSidebarOpen);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';
@import '@/assets/styles/_sizes';

.skillometer {
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	margin: 0 auto;
	height: 100%;

	&__content {
		display: flex;
		flex-direction: row;

		flex-grow: 1;
	}

	&__sidebar {
		width: @sidebar-width;
		min-width: @sidebar-width;
	}

	&__view {
		width: 100%;

		padding: 20px 15px 0;

		@media @medium {
			padding: 20px 20px 0;
		}
		@media @large {
			padding: 20px 25px 0;
		}
	}
}
</style>
