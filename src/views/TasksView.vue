<template>
	<div class="tasks">
		<h1 class="tasks__header heading">Список задач</h1>
		<div v-for="task in showedTasks" :key="task.id" class="task">
			<div class="task__info">
				<div class="task__supheading">
					<div class="task__id">Задача №{{ task.id }}</div>
					<SkillBadge v-for="tag of task.tags" :key="tag" :label="tag" class="task__tags" />
				</div>

				<div :class="['task__difficulty', `task__difficulty_${getTaskDifficulty(task)}`]">{{ task.difficulty }}</div>
			</div>
			<h2 class="heading">{{ task.title }}</h2>
			<p class="task__question text text_black">{{ task.question }}</p>
			<div class="task__images">
				<img
					v-for="(image, index) of task.images"
					:key="image"
					:src="`/images/${image}`"
					:alt="`Image ${index}`"
					class="task__image"
				/>
			</div>
		</div>
		<div class="pagination">
			<SkillPagination :items="allTasks" :pageSize="2" @changePage="onChangePageHandler" />
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useSkillStore } from '@/stores/SkillStore';
import SkillBadge from '@/components/SkillBadge.vue';
import SkillPagination from '@/components/SkillPagination.vue';
const SkillStore = useSkillStore();

const showedTasks = ref([]);

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

const onChangePageHandler = (items) => {
	showedTasks.value = items;
};

const zoomImage = (image) => {};
</script>

<style lang="less">
@import '@/assets/styles/_breakpoints';

.task {
	background-color: #eeeeeeee;
	border-radius: 5px;
	padding: 15px;
	margin-bottom: 20px;

	&__images {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	&__image {
		max-width: 100%;

		@media @medium {
			max-width: 50%;
		}
	}

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
