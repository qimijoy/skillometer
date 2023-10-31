<template>
	<div class="task">
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
				:src="`${image}`"
				:alt="`Image ${index}`"
				class="task__image"
			/>
		</div>
		<div v-if="showAnswers" class="task__answers">
			<SkillRadio
				v-for="(answer, index) of taskAnswers"
				:id="`answer-${index}-${answer.id}`"
				:key="answer.id"
				:name="`answer-${task.id}`"
				:value="answer.id"
				:label="answer.text"
				:disabled="disableAnswers"
				class="task__answer"
				@update:checkedValue="selectAnswer(answer.id)"
			/>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import SkillBadge from '@/components/SkillBadge.vue';
import SkillRadio from '@/components/controls/SkillRadio.vue';
import shuffle from '@/utils/shuffle';

const props = defineProps({
	task: {
		type: Object,
		required: true,
	},
	showAnswers: {
		type: Boolean,
		default: false,
	},
	disableAnswers: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits({
	'update:modelValue': (answerId) => typeof answerId === 'number',
});

// STATES
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

// COMPUTED
const taskAnswers = computed(() => shuffle(props.task.answers));

const selectAnswer = (answerId) => {
	emit('update:modelValue', answerId);
};
</script>

<style scoped lang="less">
@import '@/assets/styles/_breakpoints';

.task {
	background-color: #eeee;
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

	&__images {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-bottom: 20px;
	}

	&__image {
		max-width: 100%;

		@media @medium {
			max-width: 50%;
		}
	}

	&__answers {
		display: flex;
		flex-direction: column;
	}

	&__answer {
		margin-bottom: 15px;

		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
