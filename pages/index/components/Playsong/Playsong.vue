<script setup>
	import { ref } from "vue"
	import { getPlaysongApi } from "../../../../servers";
	
	const list = ref([])
	
	const getPlaysong = async () => {
		const res = await getPlaysongApi()
		list.value = res.data.playlists
		// console.log(res,list.value);
	}
	getPlaysong()
	
</script>

<template>
	<view class="nav">
		<view class="header">精品歌单</view>
		<view class="main">
			<view class="Playsong" v-for="(item,index) in list" :key="item.id">
				<view class="Playpop">
					<img :src="item.coverImgUrl" alt=""/>
					<view class="PlayName">{{item.name}}</view>
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
		.Playpop{
			width: 260rpx;
			margin: 10rpx;
			>img{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}			
			.PlayName{
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
	.Playsong{
		display: flex;
	}
</style>