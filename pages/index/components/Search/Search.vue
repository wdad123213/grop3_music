<script setup>
	import {
		nextTick,
		ref
	} from "vue"
	import {
		getSearchApi,
		getSearchHotApi
	} from "../../../../servers";
	const searchValue = ref('')
	const searchList = ref([])
	const hotValue = ref([])
	const historyList = ref([])
	const flag = ref(true)
	const getList = async (e) => {
		flag.value = false
		const res = await getSearchApi(e)
		nextTick(() => {
			// console.log(res.data.result?.songs)
			searchList.value = res.data.result?.songs
			console.log(flag.value)
		})
	}
	const push = () => {
		console.log(searchValue.value)
		if(historyList.value.length===0){
			historyList.value.push(searchValue.value)
		}else{
			if(!historyList.value.find(v=>v===searchValue.value)){
				historyList.value.push(searchValue.value)
			}
		}
		console.log(historyList.value)
	}
	const getHotList = async (e) => {
		const hotRes = await getSearchHotApi(e)
		nextTick(() => {
			hotValue.value = hotRes.data.result.hots
			console.log(hotRes.data)
		})
	}
	const exit=()=>{
		flag.value = true
		console.log(flag.value)
	}
	// getList(searchValue.value)
	getHotList()
</script>

<template>
<<<<<<< HEAD
	<uni-section>
		<uni-search-bar v-model="searchValue" @input="getList" @confirm="push" placeholder="请输入歌手或歌曲名"
		@cancel='exit'
=======
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
>>>>>>> main
		>
		</uni-search-bar>
	</uni-section>
	<view v-show="!flag" v-for="(item,index) in searchList" :key="index">{{item.name}}</view>
	<uni-section v-show="flag" class="mb-10" title="搜索历史" type="line" titleFontSize="30rpx">
		<template v-slot:right>
			<uni-icons type="trash" size="60rpx"></uni-icons>
		</template>
		<view class="history">
			<view class="history-item" v-for="(item,index) in historyList" :key="index">{{item}}</view>
		</view>
	
	</uni-section>
	<uni-section v-show="flag" class="mb-10" title="热门搜索" type="line" titleFontSize="30rpx">
		<view v-for="(item,index) in hotValue" :key="index">{{item.first}}</view>
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
    .history{
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
	}
	.history-item{
		margin: 0 10rpx;
		padding: 10rpx;
		background-color: #ccc;
		border-radius: 10rpx;
	}
	.uni-mt-10 {
		margin-top: 10px;
	}
</style>