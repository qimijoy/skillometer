<template>
	<span class="badge">{{ label }}</span>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: '',
		required: true,
	},
});
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';

.badge {
	padding: 6px 12px;
	background-color: @primary;
	border-radius: 10px;
	color: @white;
}
</style>
