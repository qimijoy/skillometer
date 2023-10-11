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
			<div class="content__stats">Всего задач: {{ tasksCount }}</div>
		</div>
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useSkillStore } from '@/stores/SkillStore';

const SkillStore = useSkillStore();

// COMPUTED
const tasksCount = computed(() => SkillStore.allTasks.length);
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
}
</style>
