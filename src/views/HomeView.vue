<template>
	<main>
		<h1 class="heading">Welcome!</h1>
		<div class="content">
			<div class="content__info">
				<p class="text text_black text_justify">
					Это приложение создано для того, чтобы тестировать скиллы =) Например, вы готовитесь к собеседованию, и вам
					нужно быстро повторить решение типовых задач.
				</p>
				<p class="text text_black text_justify">
					В этом приложении можно выбрать уровень сложности, темы задач, ответить на вопросы, выбрав один из вариантов
					ответа, и получить объяснение, почему так, а не иначе.
				</p>
			</div>
			<div class="content__stats">
				<p class="text text_black text_justify">Всего задач: {{ tasksCount }}</p>
				<p class="text text_black text_justify">Темы:</p>
				<div class="content__stats-badges badges">
					<SkillBadge v-for="tag of allTags" :key="tag" class="badges__item" :label="tag" />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useSkillStore } from '@/stores/SkillStore';

import SkillBadge from '@/components/SkillBadge.vue';

const SkillStore = useSkillStore();

// COMPUTED
const tasksCount = computed(() => SkillStore.allTasks.length);
const allTags = computed(() => SkillStore.allTags);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.content {
	display: grid;
	grid-template-columns: 1fr;
	gap: 15px 60px;

	@media @medium {
		grid-template-columns: 1.5fr 0.8fr;
	}

	&__stats-badges {
		display: flex;
		flex-flow: row wrap;
	}
}

.badges {
	&__item {
		margin-right: 5px;
		margin-top: 5px;
	}
}
</style>
