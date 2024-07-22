<script setup>
	import { ref } from "vue"
	import { getPlaysongApi } from "../../../../servers";
	
	const list = ref([])
	
	const getPlaysong = async () => {
		const res = await getPlaysongApi()
		list.value = res.data.playlists
		// console.log(res,list.value);
	}
	const songApi=(id)=>{
		console.log(id)
		uni.navigateTo({
			  url:`/pages/songSheet/songSheet?id=${id}`,
			  })
		
	}
	getPlaysong()
	
</script>

<template>
	<view class="nav">
		<view class="header">精品歌单</view>
		<view class="main">
			<view class="Playsong" v-for="(item,index) in list" :key="item.id" @click="songApi(item.id)">
				<view class="Playpop">
					<image :src="item.coverImgUrl" alt=""/>
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
			width: 240rpx;
			margin: 10rpx;
			/* margin-bottom: 160rpx; */
			>image{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}			
			.PlayName{
				width: 240rpx;
				height: 60rpx;
				font-size: 24rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
	.Playsong{
		display: flex;
	}
	
	.main::-webkit-scrollbar{
		display: none;
	}
</style>