<script setup>
	import { ref } from "vue"
	import { getSystemApi } from "../../../../servers";
	
	const list = ref([])
	const arr = ref([])
	
	const getSystem = async () => {
		const res = await getSystemApi()
		list.value = res.data.result
		// console.log(list.value)
	}
	const songApi=(id)=>{
		// console.log(id)
		uni.navigateTo({
			  url:`/pages/songSheet/songSheet?id=${id}`,
			  })
	}
	getSystem()
</script>

<template>
	<view class="nav">
		<view class="header">推荐歌单</view>
		<view class="main">
			<view class="sysinfos" v-for="(item,index) in list" :key="item.id" @click="songApi(item.id)">
				<view class="syspop">
					<image :src="item.picUrl" alt=""/>
					<view class="sysName">{{item.name}}</view>
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
		.syspop{
			width: 240rpx;
			margin: 10rpx;
			
			>image{
				border-radius: 10rpx;
				height: 240rpx;
				width: 240rpx;
			}
			.sysName{
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
	.sysinfos{
		display: flex;
		margin: 40rpx 0;
	}
	.main::-webkit-scrollbar{
		display: none;
	}
</style>