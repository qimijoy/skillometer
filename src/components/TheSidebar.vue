<template>
	<aside class="sidebar">
		<div class="sidebar__links">
			<SkillRouterLink
				v-for="link of links"
				:key="link.name"
				:name="link.name"
				:to="link.href"
				:disabled="false"
				:active="link.href === route.fullPath"
			/>
		</div>
	</aside>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';
import { useRoute } from 'vue-router';

import SkillRouterLink from '@/components/SkillRouterLink.vue';

const mainStore = useMainStore();
const route = useRoute();

// COMPUTED
const links = computed(() => [{ name: 'Тест', href: '/auth' }]);
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';
@import '@/assets/styles/_sizes';
@import '@/assets/styles/_mixins';

.sidebar {
	display: flex;
	flex-direction: row;

	margin-right: 20px;

	background-color: @white;

	transition: 200ms;
	box-shadow: 0 0 10px rgb(0 0 0 / 0.07);

	&__toggle {
		display: flex;

		width: 15px;
		height: 100%;

		color: @white;

		background: @primary-hover;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}

	&__links {
		display: flex;
		flex-direction: column;

		width: 100%;

		padding: 20px;
	}
}
</style>
