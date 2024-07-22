<script setup>
	import { ref } from "vue"
	import { getReMVApi } from "../../../../servers";
	
	const list = ref([])
	
	const getReMV = async () => {
		const res = await getReMVApi()
		list.value = res.data.playlists
	}
	const songApi=(id)=>{
		// console.log(id)
		uni.navigateTo({
			  url:`/pages/songSheet/songSheet?id=${id}`,
			  })
	}
	getReMV()
</script>

<template>
	<view class="nav" >
		<view class="header">网易云音乐的雷达歌单</view>
		<view class="main">
			<view class="reMV" v-for="(item,index) in list" :key="item.id"  @click="songApi(item.id)">
				<view class="remvpop">
					<image :src="item.coverImgUrl" alt=""/>
					<view class="remvName">{{item.name}}</view>
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
			width: 240rpx;
			margin: 10rpx;
			>image{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}			
			.remvName{
				font-size: 24rpx;
				width: 240rpx;
				height: 60rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
	.reMV{
		display: flex;
		margin: 40rpx 0;
	}
	.main::-webkit-scrollbar{
		display: none;
	}
</style>