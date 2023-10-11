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

import SKillHeader from '@/components/SKillHeader.vue';
import SkillSidebar from '@/components/SkillSidebar.vue';

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
	padding: 0 10px;
	height: 100%;

	@media @small {
		padding: 0 15px;
	}

	@media @medium {
		padding: 0 20px;
	}
	@media @large {
		padding: 0 25px;
	}

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
		padding: 20px 30px;
		width: 100%;
	}
}
</style>
