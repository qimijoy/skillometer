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
	width: 100%;
	height: @header-height;
	display: flex;
	align-items: center;

	min-height: @header-height;
	background-color: @white;

	padding: 0 20px;
	box-shadow: 0 0 10px rgb(0 0 0 / 7%);

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
