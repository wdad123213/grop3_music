<script setup>
	import { ref } from "vue"
	import { getReMVApi } from "../../../../servers";
	
	const list = ref([])
	
	const getReMV = async () => {
		const res = await getReMVApi()
		list.value = res.data.result
		// console.log(res,list.value);
	}
	getReMV()
</script>


<template>
	<view class="nav">
		<view class="header">网易云音乐的雷达歌单</view>
		<view class="main">
			<view class="reMV" v-for="(item,index) in list" :key="item.id">
				<view class="remvpop">
					<img :src="item.picUrl" alt=""/>
					<view class="remvName">{{item.copywriter}}</view>
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
		.remvpop{
			width: 260rpx;
			margin: 10rpx;
			>img{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}			
			.remvName{
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
	.reMV{
		display: flex;
	}
</style>