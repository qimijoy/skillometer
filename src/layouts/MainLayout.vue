<template>
	<div class="skillometer">123</div>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.skillometer {
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	margin: 0 auto;
	padding: 0 10px;
	height: 100%;

	@media @small {
		padding: 0 15px;
	}

	@media @medium {
		padding: 0 20px;
	}
	@media @large {
		padding: 0 25px;
	}
}
</style>
