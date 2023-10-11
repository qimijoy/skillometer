import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skillStore', () => {
	// STATES
	const skills = ref([]);

	// ACTIONS
	const addSkill = (skillName) => {
		skills.value.push(skillName);
	};

	const removeSkill = (skillName) => {
		const index = skills.value.indexOf(skillName);
		if (index !== -1) {
			skills.value.splice(index, 1);
		}
	};

	return {
		skills,
		addSkill,
		removeSkill,
	};
});
