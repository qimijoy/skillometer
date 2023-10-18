import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import skills from '@/skills/';

export const useSkillStore = defineStore('skillStore', () => {
	// STATES
	const allSkills = ref(skills);
	const difficulties = ref(['easy', 'medium', 'hard']);

	// COMPUTED
	const allSkillsArray = computed(() => Object.keys(allSkills.value));

	const allTasks = computed(() => {
		if (!allSkills.value) {
			return [];
		}

		const result = [];

		for (const skill in allSkills.value) {
			if (Object.hasOwn(allSkills.value, skill)) {
				for (const task in allSkills.value[skill]) {
					if (Object.hasOwn(allSkills.value[skill], task)) {
						result.push(allSkills.value[skill][task]);
					}
				}
			}
		}

		return result;
	});

	const allTags = computed(() => {
		const tags = allTasks.value.reduce((acc, task) => {
			return [...acc, ...task.tags];
		}, []);

		return Array.from(new Set(tags));
	});

	return {
		allSkills,
		allSkillsArray,
		allTasks,
		allTags,
		difficulties,
	};
});
