<template>
	<div class="skillometer">
		<SKillHeader />

		<div class="skillometer__content">
			<RouterView class="skillometer__view" />
		</div>
	</div>
</template>

<script setup>
import { useMainStore } from '@/stores/MainStore';

import SKillHeader from '@/components/TheHeader.vue';

const mainStore = useMainStore();
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';
@import '@/assets/styles/_sizes';

.skillometer {
	max-width: 1024px;
	height: 100%;

	margin: 0 auto;
	display: flex;

	flex-direction: column;

	&__content {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
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
