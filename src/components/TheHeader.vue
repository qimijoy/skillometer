<template>
	<header class="header">
		<nav class="header__nav">
			<SkillRouterLink
				v-for="link of links"
				:key="link.name"
				:name="link.name"
				:to="link.href"
				:disabled="false"
				:active="link.href === route.fullPath"
			/>
		</nav>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useMainStore } from '@/stores/MainStore';

import SkillRouterLink from '@/components/SkillRouterLink.vue';

const mainStore = useMainStore();
const route = useRoute();

// Computed
const links = computed(() => [
	{ name: 'Домой', href: '/' },
	{ name: 'Список задач', href: '/tasks' },
	{ name: 'Скиллометр', href: '/skillometer' },
]);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_palette';
@import '@/assets/styles/_sizes';
@import '@/assets/styles/_mixins';

.header {
	display: flex;

	width: 100%;
	height: @header-height;

	min-height: @header-height;

	padding: 0 20px;

	background-color: @white;
	align-items: center;
	box-shadow: 0 0 10px rgb(0 0 0 / 0.07);

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
