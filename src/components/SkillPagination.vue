<template>
	<ul class="pagination">
		<template v-if="pager.pages && pager.pages.length > 1">
			<li class="pagination__item">
				<button type="button" class="pagination__button" :disabled="isFirstPage" @click="setPage(1)">First</button>
			</li>
			<li class="pagination__item">
				<button
					type="button"
					class="pagination__button"
					:disabled="isFirstPage"
					@click="setPage(pager.currentPage - 1)"
				>
					Previous
				</button>
			</li>
			<li v-for="page of pager.pages" :key="page" class="pagination__item">
				<button
					type="button"
					:class="['pagination__button', { pagination__button_active: pager.currentPage === page }]"
					@click="setPage(page)"
				>
					{{ page }}
				</button>
			</li>
			<li class="pagination__item">
				<button type="button" class="pagination__button" :disabled="isLastPage" @click="setPage(pager.currentPage + 1)">
					Next
				</button>
			</li>
			<li class="pagination__item">
				<button type="button" class="pagination__button" :disabled="isLastPage" @click="setPage(totalPages)">
					Last
				</button>
			</li>
		</template>
	</ul>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import paginate from 'jw-paginate';

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	initialPage: {
		type: Number,
		default: 1,
	},
	pageSize: {
		type: Number,
		default: 10,
	},
	maxPages: {
		type: Number,
		default: 6,
	},
});

const emit = defineEmits({
	changePage: (pageOfItems) => {
		return true;
	},
});

// STATES
const pager = ref({});

// COMPUTED
const isFirstPage = computed(() => pager.value.currentPage === 1);
const isLastPage = computed(() => pager.value.currentPage === pager.value.totalPages);
const totalPages = computed(() => pager.value.totalPages);

onMounted(() => {
	setPage(props.initialPage);
});

// FUNCTIONS
const setPage = (pageId) => {
	pager.value = paginate(props.items.length, pageId, props.pageSize, props.maxPages);

	const pageOfItems = props.items.slice(pager.value.startIndex, pager.value.endIndex + 1);

	emit('changePage', pageOfItems);
};

watch(
	() => props.items,
	() => setPage(props.initialPage),
);
</script>

<style scoped lang="less">
.pagination {
	display: flex;

	margin: 0;
	padding: 0;

	&__item {
		list-style: none;
	}

	&__button {
		padding: 8px 14px;

		border: none;
		border-radius: 2px;

		cursor: pointer;

		&_active {
			background-color: #ff647c;
		}
	}
}
</style>
