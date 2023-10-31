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
	background-color: @white;
	margin-right: 20px;
	transition: 0.2s;
	box-shadow: 0 0 10px rgb(0 0 0 / 7%);

	&__toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15px;
		height: 100%;
		background: @primary-hover;
		color: @white;
		cursor: pointer;
	}

	&__links {
		padding: 20px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
}
</style>
