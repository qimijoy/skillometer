<template>
	<div>
		<h1>Список задач</h1>
		<div v-for="task of allTasks" :key="task.id" class="task">
			<p class="task__question text text_black">{{ task }}</p>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

import { useSkillStore } from '@/stores/SkillStore';
const SkillStore = useSkillStore();

const allTasks = computed(() => SkillStore.allTasks);
const tags = computed(() => SkillStore.allTags);
</script>

<style lang="less">
.task {
}
</style>
