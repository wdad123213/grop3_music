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
	const historyList =ref(JSON.parse(localStorage.getItem('history')) || []);
	const flag = ref(true)
	const isSearching = ref(false)
	const getList = async (e) => {
		console.log(e)
		if (!isSearching.value) return;
		flag.value = false
		const res = await getSearchApi(e)
		nextTick(() => {
			console.log(res.data.result?.songs)
			searchList.value = res.data.result?.songs
			// console.log(flag.value)
		})
	}

	const push = () => {
		if (historyList.value.length === 0 || historyList.value[0] !== searchValue.value) {
			historyList.value.unshift(searchValue.value)
			// localStorage.setItem("history":searchValue.value)
		}
		historyList.value = historyList.value.filter((item, index, self) => index === self.indexOf(item));
		localStorage.setItem("history", JSON.stringify(historyList.value));
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
			url: '/pages/player/player',
			events: {
				acceptDataFromOpenedPage: function(e) {
					console.log(e)
				},
				someEvent: function(e) {
					console.log(e)
				}
			},
			success: function(res) {
				res.eventChannel.emit('acceptDataFromOpenerPage', {
					data: e
				})
			}	
		})
	}
	const del = () => {
		historyList.value = []
		if(localStorage.getItem("history")){
			localStorage.removeItem("history");
		}
	}
	const searchGetList = (e) => {
		isSearching.value = true
		searchValue.value = e
		if (searchValue.value === '') {
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
	<view v-if="!flag" v-for="(item,index) in searchList" class="search-item"
		:style="{ animationDelay: index * 0.1 + 's' }" :key="index" @click="searchPlay(item)">
		<text class="search-item-title">{{ item.name }}</text>
	</view>
	<uni-section v-if="flag" class="mb-10" title="搜索历史" type="line" titleFontSize="30rpx">
		<template v-slot:right>
			<uni-icons type="trash" size="60rpx" @click="del"></uni-icons>
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
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
		transition: background-color 0.3s, transform 0.2s;
		cursor: pointer;
	}

	.hotHistory:hover {
		background-color: #e9310c;
		color: #ffffff;
	}

	@keyframes slideIn {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(0);
		}
	}

	.hotHistory {
		animation: slideIn 0.5s ease forwards;
	}

	.search-item,
	.hotHistory {
		animation-iteration-count: 1;
	}

	.search-result {
		padding-top: 20rpx;
		padding-bottom: 40rpx;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 28;
		color: #666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0rpx;
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
		margin-top: 20rpx;
	}

	.search-result {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-top: 40rpx;
	}

	.search-item {
		padding: 20rpx;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
		background-color: #f0f0f0;
		transition: background-color 0.3s ease;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-item.active {
		background-color: #e9e9e9;
		transform: scale(1.05);
	}

	.search-item:hover {
		background-color: #e9310c;
		color: #ccc;
	}


	.search-item-title {
		font-size: 32rpx;
		color: #333;
	}

	@media (max-width: 768px) {
		.search-item {
			padding: 16rpx;
		}

		.search-item-title {
			font-size: 28rpx;
		}
	}

	.search-item {
		opacity: 0;
		animation: fadeIn 0.5s ease forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>