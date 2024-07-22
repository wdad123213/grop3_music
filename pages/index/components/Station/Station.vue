<script setup>
	import { ref } from "vue"
	import { getStationApi } from "../../../../servers";
	
	const list = ref([])
	
	const getStation = async () => {
		const res = await getStationApi()
		list.value = res.data.programs
		// console.log(res,list.value);
	}
	const songApi=(id)=>{
		console.log(id)
		uni.navigateTo({
			  url:`/pages/songSheet/songSheet?id=${id}`,
			  })
	}
	getStation()
</script>

<template>
	<view class="nav">
		<view class="header">专属场景歌单</view>
		<view class="main">
			<view class="Station" v-for="(item,index) in list" :key="item.id"   @click="songApi(item.id)">
				<view class="Stapop">
					<img :src="item.blurCoverUrl" alt=""/>
					<view class="StaName ">{{item.name}}</view>
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
			width: 240rpx;
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
				height: 60rpx;
				overflow: hidden;
			}
		}
	}
	.Station{
		display: flex;
		margin: 40rpx 0;
	}
	.main::-webkit-scrollbar{
		display: none;
	}
</style>