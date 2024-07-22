<script setup>
	import { ref } from "vue"
	import { getGuessApi } from "../../../../servers";
	
	const list = ref([])
	
	const getGuess = async () => {
		const res = await getGuessApi()
		list.value = res.data.result
		// console.log(res,list.value);
	}
	getGuess()
	
	function tobar(it){
		// console.log(id)
		uni.navigateTo({
			  url:`/pages/player/player?id=${it.id}`,
			  })
	}
	
	// 	const searchPlay = (e) => {
	// 		console.log(e)
	// 		uni.navigateTo({
	// 			url: '/pages/player/player',
	// 			events: {
	// 				// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
	// 				acceptDataFromOpenedPage: function(e) {
	// 					console.log(e)
	// 				},
	// 				someEvent: function(e) {
	// 					console.log(e)
	// 				}
	
	// 			},
	// 			success: function(res) {
	// 				// 通过eventChannel向被打开页面传送数据
	// 				res.eventChannel.emit('acceptDataFromOpenerPage', {
	// 					data: e
	// 				})
	// 			}
	// 		});
	// 	}
</script>

<template>
	<view class="nav">
		<view class="header">猜你喜欢的「华语」好歌</view>
		<view class="main">
			<view class="guess" v-for="(item,index) in list" :key="item.id">
				<view class="guepop" @click="tobar(item)" >
					<image :src="item.picUrl" alt=""/>
					<view class="gueName">{{item.name}}</view>
					<image src="../../../../assets/播放.png" alt="" style="width: 48rpx;height: 48rpx;"/>
				</view>
			</view>
		</view>
	</view>
</template>

<style scoped>
	.nav{
		padding: 20rpx 0;
	}
	.header{
		border-left: 10rpx solid #C84341;
		padding-left: 20rpx;
	}
	.main{
		display: flex;
		/* justify-content: center; */
		flex-direction: column;
		margin: 40rpx 0;
		height: 350rpx;
		flex-wrap: wrap;
		overflow-x: auto;
		scrollbar-width:none;
		
		.guepop{
			margin: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			>image{
				border-radius: 10rpx;
				width: 90rpx;
				height: 90rpx;
			}
			.gueName{
				padding-left: 20rpx;
				width: 500rpx;
				height: 60rpx;
				font-size: 28rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
	.guess{
		display: flex;
		
		/* margin: 40rpx 0; */
	}
	.main::-webkit-scrollbar{
		display: none;
	}
</style>