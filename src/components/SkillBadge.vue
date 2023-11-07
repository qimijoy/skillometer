<template>
	<span class="badge">{{ label }}</span>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
});
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';

.badge {
	padding: 6px 12px;

	line-height: 1em;

	color: @white;

	background-color: @primary;
	border-radius: 10px;
}
</style>
