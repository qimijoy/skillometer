<template>
	<header class="header">
		<SkillBurger class="header__burger" color="primary" @change="(state) => setSidebarState(state)" :disabled="false" />
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

import SkillBurger from '@/components/SkillBurger.vue';
import SkillRouterLink from '@/components/SkillRouterLink.vue';

const mainStore = useMainStore();
const route = useRoute();

// Computed
const links = computed(() => [
	{ name: 'Домой', href: '/' },
	{ name: 'Вопросы', href: '/skillometer' },
]);

const setSidebarState = (value) => {
	mainStore.setSidebarState(value);
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_palette';
@import '@/assets/styles/_sizes';
@import '@/assets/styles/_mixins';

.header {
	display: flex;
	align-items: center;

	height: @header-height;
	min-height: @header-height;
	width: 100%;

	background-color: @white;
	padding: 0 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

	&__burger {
		margin-right: 40px;
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__lang-switcher {
		margin-left: auto;
	}
}
</style>
