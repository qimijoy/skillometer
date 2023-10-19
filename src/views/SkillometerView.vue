<template>
	<div v-if="startSkillometer">
		<template v-if="!tasksToShowLength">
			<div class="skillometer__options">
				<h2 class="heading">Скиллы</h2>
				<VSelect v-model="skills" class="skillometer__select" :options="allSkillsArray" placeholder="Скиллы" multiple />

				<h2 class="heading">Теги</h2>
				<VSelect v-model="tags" class="skillometer__select" :options="allTags" placeholder="Теги" multiple />

				<h2 class="heading">Сложность</h2>
				<VSelect
					v-model="difficulties"
					class="skillometer__select"
					:options="allDifficulties"
					placeholder="Сложность"
					multiple
				/>

				<h2 class="heading">Количество задач</h2>
				<VSelect
					v-model="tasksCount"
					class="skillometer__select"
					:options="[5, 10, 15, 20, 25, 30]"
					placeholder="Количество задач"
					multiple
				/>

				<button type="button" class="skillometer__button" :disabled="!allValuesSettled" @click="startHandler">
					Начать
				</button>
			</div>
		</template>

		<template v-else>
			<SkillChecker class="skillometer__tasks" :tasks="tasksToShow" @finish="finishHandler" />
		</template>
	</div>
	<div v-else>Попробуйте ещё раз!</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSkillStore } from '@/stores/SkillStore';

import SkillChecker from '@/components/SkillChecker.vue';
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import shuffle from '@/utils/shuffle';

const SkillStore = useSkillStore();

// STATES
const skills = ref([]);
const tags = ref([]);
const difficulties = ref([]);
const tasksCount = ref(null);
const tasksToShow = ref([]);
const startSkillometer = ref(true);

// COMPUTED
const allSkillsArray = computed(() => SkillStore.allSkillsArray);
const allTags = computed(() => SkillStore.allTags);
const allDifficulties = computed(() => SkillStore.difficulties);
const allTasks = computed(() => SkillStore.allTasks);

const allValuesSettled = computed(
	() => skills.value.length && tags.value.length && difficulties.value.length && tasksCount.value,
);
const tasksToShowLength = computed(() => tasksToShow.value.length);

const startHandler = () => {
	tasksToShow.value = shuffle(
		allTasks.value.filter((task) => {
			const matchesSkills = skills.value.some((skill) => task.skill === skill);
			const matchesDifficulty = difficulties.value.includes(task.difficulty);
			const matchesTags = tags.value.some((tag) => task.tags.includes(tag));

			return matchesSkills && matchesDifficulty && matchesTags;
		}),
	);
};

const finishHandler = () => {
	startSkillometer.value = false;
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.skillometer {
	&__options {
		display: flex;
		flex-direction: column;
		margin: 0 auto;

		@media @medium {
			max-width: 500px;
		}
	}

	&__select {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__button {
		padding: 8px 16px;
	}
}
</style>
