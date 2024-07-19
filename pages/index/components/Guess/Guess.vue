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
</script>

<template>
	<view class="nav">
		<view class="header">猜你喜欢的「华语」好歌</view>
		<view class="main">
			<view class="guess" v-for="(item,index) in list" :key="item.id" >
				<view class="guepop">
					<img :src="item.picUrl" alt=""/>
					<view class="gueName">{{item.name}}</view>
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
		overflow-x: auto;
		scrollbar-width:none;
		.guepop{
			margin: 10rpx;
			>img{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}
			.gueName{
				font-size: 24rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				height: 80rpx;
				overflow: hidden;
			}
		}
	}
	.guess{
		display: flex;
	}
</style>