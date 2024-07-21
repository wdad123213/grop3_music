<script setup>
	import {
		nextTick,
		ref
	} from "vue"
	import {
		getSearchApi,
		getSearchHotApi
	} from "../../servers";
	const searchValue = ref('')
	const searchList = ref([])
	const hotValue = ref([])
	const historyList = ref([])
	const flag = ref(true)
	const isSearching = ref(false)
	const getList = async (e) => {
		console.log(e)
		if (!isSearching.value) return;
		flag.value = false
		const res = await getSearchApi(e)
		nextTick(() => {
			// console.log(res.data.result?.songs)
			searchList.value = res.data.result?.songs
			console.log(flag.value)
		})
	}
	// const push = () => {
	// 	console.log(searchValue.value)
	// 	if (historyList.value.length === 0) {
	// 		historyList.value.push(searchValue.value)
	// 	} else {
	// 		if (!historyList.value.find(v => v === searchValue.value)) {
	// 			historyList.value.push(searchValue.value)
	// 		}
	// 	}
	// 	console.log(historyList.value)
	// }
	const push = () => {
		if (historyList.value.length === 0 || historyList.value[0] !== searchValue.value) {
			historyList.value.unshift(searchValue.value)
		}
		historyList.value = historyList.value.filter((item, index, self) => index === self.indexOf(item));
		console.log(historyList.value)
	}
	const getHotList = async (e) => {
		const hotRes = await getSearchHotApi(e)
		nextTick(() => {
			hotValue.value = hotRes.data.result.hots
			console.log(hotRes.data)
		})
	}
	const exit = () => {
		flag.value = true
		isSearching.value = false
		searchValue.value = ''
		searchList.value = []
		// console.log(flag.value)
	}
	const searchPlay = (e) => {
		console.log(e)
		uni.navigateTo({
			url: '/pages/player/player'
		});
	}
	const searchGetList = (e) => {
		isSearching.value = true
		searchValue.value = e
		if (searchValue.value=== '') {
			console.log(searchValue.value)
			return
		}
		console.log('搜索输入')
		getList(e)

	}

	// 
	getHotList()
</script>

<template>

	<uni-section>
		<uni-search-bar v-model.trim="searchValue" @input="searchGetList" @confirm="push" placeholder="请输入歌手或歌曲名"
			@cancel='exit'>
		</uni-search-bar>
	</uni-section>
	<view v-if="!flag" v-for="(item,index) in searchList" :key="index" @click="searchPlay(item)">{{item.name}}</view>
	<uni-section v-if="flag" class="mb-10" title="搜索历史" type="line" titleFontSize="30rpx">
		<template v-slot:right>
			<uni-icons type="trash" size="60rpx"></uni-icons>
		</template>
		<view class="history">
			<view class="history-item" @click="searchGetList(item)" v-for="(item,index) in historyList" :key="index">
				{{item}}
			</view>
		</view>

	</uni-section>
	<uni-section v-if="flag" class="mb-10" title="热门搜索" type="line" titleFontSize="30rpx">
		<view class="hotHistory" v-for="(item,index) in hotValue" :key="index" @click="searchGetList(item.first)">
			{{index+1}}
			{{item.first}}
		</view>
	</uni-section>



</template>


<style lang="scss" scoped>
	.hotHistory {
		height: 60rpx;
		margin-left: 20rpx;
	}

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

	.history {
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
	}

	.history-item {
		margin: 0 10rpx;
		padding: 10rpx;
		background-color: #ccc;
		border-radius: 10rpx;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>