<script setup>
	import { ref } from "vue"
	import { getStationApi } from "../../../../servers";
	
	const list = ref([])
	
	const getStation = async () => {
		const res = await getStationApi()
		list.value = res.data.result
		// console.log(res,list.value);
	}
	getStation()
</script>

<template>
	<view class="nav">
		<view class="header">专属场景歌单</view>
		<view class="main">
			<view class="Station" v-for="(item,index) in list" :key="item.id" >
				<view class="Stapop">
					<img :src="item.picUrl" alt=""/>
					<view class="StaName">{{item.copywriter}}</view>
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
		.Stapop{
			width: 260rpx;
			margin: 10rpx;
			>img{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}			
			.StaName{
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
	.Station{
		display: flex;
	}
</style>