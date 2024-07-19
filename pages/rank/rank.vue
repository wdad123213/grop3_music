<script setup>
import { ref } from "vue"
import {getRankApi} from "@/servers/index.js"


const rankList = ref([])
const rankListUser= ref([])
const getRank = async()=>{
	const res = await  getRankApi()
	rankList.value = res.data.list
}

const songApi=(id)=>{
	console.log(id)
	uni.navigateTo({
		  url:`/pages/songSheet/songSheet?id=${id}`,
		  })
	
}

getRank()
console.log(rankList)

</script>
<template>
	<view class="offic">
		<view class="topOne">
			官方榜
		</view>
		<view class="listBox" v-for="item in rankList.filter((i,index)=>index<=3)" @click="songApi(item.id)">
			<view class="listBox-top">
				<img :src="item.coverImgUrl" alt="" />
				<view class="hot">
					<span>{{item.name}}</span>
					<span>{{item.playCount}}</span>
				</view>
				<span>{{item.updateFrequency}}</span>
			</view>
			<view class="listBox-list">
				<ol>
					<li class="inlist" v-for="it in item.tracks">{{it.first}}-{{it.second}}</li>
				</ol>
			</view>
		</view>
		<view class="topOne">
			其他榜单
		</view>
		<view class="suchbox" >
		    <span v-for="item in rankList.filter((i,index)=>index>3)"  @click="songApi(item.id)">
				<img :src="item.coverImgUrl" alt="" />
			</span>		
		</view>
	</view>
</template>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.topOne{
	width: 100%;
	height: 85rpx;
	font-weight: 400;
	font-size: 40rpx;
	align-items: center;
	padding: 24rpx 20rpx;
	margin-left: 40rpx;
}
.listBox{
	width: 580rpx;
	height: 300rpx;
	margin: 30rpx;
	padding: 0px 20rpx;
	border: 1px solid #DCDCDC;
	overflow: hidden;
	.listBox-top{
		display: flex;
		font-size: 14px;
		flex: 1;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
		border-bottom: 1px #DCDCDC solid;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		overflow: hidden;
		>img{
			width: 80rpx;
			height: 80rpx;
			display: inline-block;
			overflow: hidden;
			position: relative;
		}
		.hot{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			margin-left:20rpx;
			span{
				color: #6a6a6a;
			}
		}
		>span{
			display: flex;
			justify-content: flex-end;
			flex-direction: row-reverse;
			display: block;
		}	
	}
}
.inlist{
	font-size: 24rpx;
	color: #6a6a6a;
	line-height: 40rpx;
	padding: 10rpx;
	margin-left: 10rpx;
	margin-left: 50rpx;
}
.suchbox{
	padding: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	
	span{
		margin: 10rpx;
		border-radius: 10rpx;
	}
	img{
		width: 200rpx;
		height: 200rpx;
	}
}
</style>
