<template>
	<div class="skill-checker">
		<SkillTaskCard
			v-model="answer"
			:task="currentTask"
			class="tasks__task"
			showAnswers
			:disableAnswers="showExplanation"
		/>

		<button type="button" class="skill-checker__button" :disabled="!answer" @click="checkAnswer">
			{{ buttonText }}
		</button>

		<div v-if="showExplanation" class="skill-checker__explanation">
			<p class="text skill-checker__explanation-text">{{ currentTask.explanation }}</p>
			<img
				v-for="(image, index) of currentTask.explanationImages"
				:key="image"
				:src="`/images/${image}`"
				:alt="`Image ${index}`"
				class="skill-checker__explanation-image"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SkillTaskCard from '@/components/SkillTaskCard.vue';

const props = defineProps({
	tasks: {
		type: Array,
		default: () => [],
	},
});

const emit = defineEmits({
	finish: () => true,
});

const currentTaskIndex = ref(0);
const answer = ref(null);
const showExplanation = ref(false);
const isCorrectAnswer = ref(false);

const currentTask = computed(() => props.tasks[currentTaskIndex.value]);
const tasksCount = computed(() => props.tasks.length);
const buttonText = computed(() => {
	if (!showExplanation.value) {
		return 'Проверить';
	} else {
		if (currentTaskIndex.value + 1 < tasksCount.value) {
			return 'Следующая';
		} else {
			return 'Закончить';
		}
	}
});
const correctAnswers = computed(() => props.tasks.map((task) => task.correctAnswerId));

const setAnswer = (answerId) => {
	console.log(answerId);
};

const checkAnswer = () => {
	// Если кнопка нажата после получения объяснения
	if (showExplanation.value) {
		isCorrectAnswer.value = false;
		showExplanation.value = false;

		if (currentTaskIndex.value + 1 < tasksCount.value) {
			currentTaskIndex.value++;
		} else {
			emit('finish');
		}
		// Если кнопка нажата после выбора ответа
	} else {
		if (correctAnswers.value[currentTaskIndex] === answer.value) {
			isCorrectAnswer.value = true;
		} else {
			isCorrectAnswer.value = false;
		}

		showExplanation.value = true;
	}
};
</script>

<style scoped lang="less">
.skill-checker {
	display: flex;
	flex-direction: column;

	&__button {
		padding: 10px 0;
		margin-bottom: 30px;
	}

	&__explanation {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 30px;
	}

	&__explanation-image {
		max-width: 40%;
		margin-bottom: 20px;
	}
}
</style>
