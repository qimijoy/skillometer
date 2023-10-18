<template>
	<div class="tasks">
		<h1 class="tasks__header heading">Список задач</h1>

		<SkillTaskCard v-for="task in showedTasks" :key="task.id" :task="task" class="tasks__task" />

		<div class="pagination">
			<SkillPagination :items="allTasks" :pageSize="5" @changePage="onChangePageHandler" />
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSkillStore } from '@/stores/SkillStore';

import SkillPagination from '@/components/SkillPagination.vue';
import SkillTaskCard from '@/components/SkillTaskCard.vue';

const SkillStore = useSkillStore();

const showedTasks = ref([]);

const allTasks = computed(() => SkillStore.allTasks);
const tags = computed(() => SkillStore.allTags);

const onChangePageHandler = (items) => {
	showedTasks.value = items.sort((a, b) => a.id - b.id);
};
</script>
