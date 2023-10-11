<template>
	<div>
		<h1>Тест</h1>
		<p>{{ allTasks }}</p>
	</div>
</template>

<script setup>
import { computed } from 'vue';

import { useSkillStore } from '@/stores/SkillStore';
const SkillStore = useSkillStore();

const allTasks = computed(() => SkillStore.allSkills);
const tags = computed(() => SkillStore.tags);
</script>
