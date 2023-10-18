<template>
	<div>
		<h1>Скиллометр</h1>

		<h2>Скиллы</h2>
		<VSelect :options="allSkillsArray" multiple />

		<h2>Теги</h2>
		<VSelect :options="allTags" multiple />

		<h2>Сложность</h2>
		<VSelect :options="difficulties" multiple />
	</div>
</template>

<script setup>
import { computed } from 'vue';

import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { useSkillStore } from '@/stores/SkillStore';

const SkillStore = useSkillStore();

const allSkillsArray = computed(() => SkillStore.allSkillsArray);
const allTags = computed(() => SkillStore.allTags);
const difficulties = computed(() => SkillStore.difficulties);

// SHUFFLE FUNCTION
</script>
