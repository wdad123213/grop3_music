<script setup>
	import {
		ref
	} from "vue"
	const searchValue = ref('')
</script>

<template>
	<uni-section title="基本用法" type="line">
		<uni-search-bar 
		@confirm="search" 
		:focus="true" 
		v-model="searchValue" 
		@blur="blur" 
		@focus="focus" 
		@input="input"
		@cancel="cancel" 
		@clear="clear"
		>
		</uni-search-bar>
	</uni-section>
</template>


<style lang="scss" scoped>
	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color: #666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>