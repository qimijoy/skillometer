<template>
	<div class="tasks">
		<h1 class="tasks__header heading">Список задач</h1>
		<div v-for="task of allTasks" :key="task.id" class="task">
			<div class="task__info">
				<div class="task__supheading">
					<div class="task__id">Задача №{{ task.id }}</div>
					<SkillBadge v-for="tag of task.tags" :key="tag" :label="tag" class="task__tags" />
				</div>

				<div :class="['task__difficulty', `task__difficulty_${getTaskDifficulty(task)}`]">{{ task.difficulty }}</div>
			</div>
			<h2 class="heading">{{ task.title }}</h2>
			<p class="task__question text text_black">{{ task.question }}</p>
			<p class="task__question text text_black">{{ task }}</p>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

import { useSkillStore } from '@/stores/SkillStore';
import SkillBadge from '@/components/SkillBadge.vue';
const SkillStore = useSkillStore();

const allTasks = computed(() => SkillStore.allTasks);
const tags = computed(() => SkillStore.allTags);

const getTaskDifficulty = (task) => {
	switch (task.difficulty) {
		case 'easy':
			return 'green';
		case 'medium':
			return 'yellow';
		case 'hard':
			return 'red';
		case 'default':
			return 'green';
	}
};
</script>

<style lang="less">
.task {
	background-color: #eeeeeeee;
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 20px;

	&__info {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}

	&__supheading {
		display: flex;
		align-items: center;
	}

	&__id {
		margin-right: 20px;
	}

	&__tags {
		margin-right: 5px;
	}

	&__difficulty {
		border-radius: 5px;
		padding: 3px 5px;

		&_green {
			background-color: green;
		}

		&_yellow {
			background-color: yellow;
		}

		&_red {
			background-color: red;
		}
	}
}
</style>
