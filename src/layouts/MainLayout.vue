<template>
	<div class="skillometer">
		<SKillHeader />

		<div class="skillometer__loader" v-if="isQuestionsLoading">
			<!-- лоадер -->
		</div>

		<div v-else class="skillometer__content">
			<SkillSidebar class="skillometer__sidebar" v-if="isSidebarOpen" />

			<RouterView class="skillometer__view" :class="{ skillometer__view_expanded: !isSidebarOpen }" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import SKillHeader from '@/components/SKillHeader.vue';
import SkillSidebar from '@/components/SkillSidebar.vue';

const mainStore = useMainStore();

const isQuestionsLoading = false; // пока так, а далее берем из Store

// COMPUTED
const isSidebarOpen = computed(() => mainStore.isSidebarOpen);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

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

	&__loader {
		flex-grow: 1;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__content {
		display: flex;
		flex-direction: row;

		flex-grow: 1;
	}

	&__view {
		padding: 20px 30px;
		width: 100%;
	}
}
</style>
