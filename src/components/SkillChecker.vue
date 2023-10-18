<template>
	<div class="skill-checker">
		<SkillTaskCard :task="shuffledTasks[currentTask]" class="tasks__task" />

		<button type="button" @click="currentTask++">Следующая задача</button>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SkillTaskCard from '@/components/SkillTaskCard.vue';

import shuffle from '@/utils/shuffle';

const props = defineProps({
	tasks: {
		type: Array,
		default: () => [],
	},
});

const currentTask = ref(0);

const shuffledTasks = computed(() => shuffle(props.tasks));
</script>

<style scoped lang="less">
.skill-checker {
	&__task {
	}
}
</style>
