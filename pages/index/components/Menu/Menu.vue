<script setup>
  import { ref } from "vue"

	
function tobar(){
  uni.navigateTo({
	  url:`/pages/index/components/Menu/components/dayNew`,
	  })
}
function tobar2(){
  uni.navigateTo({
	  url:`/pages/index/components/Menu/components/priv`,
	  })
}
function tobar3(){
  uni.navigateTo({
	  url:`/pages/index/components/Menu/components/NewMc`,
	  })
}
function tobar4(){
  uni.navigateTo({
	  url:`/pages/index/components/Menu/components/rank`,
	  })
}
	



</script>

<template>
	
  <view>
	<scroll-view class="scroll-view_H" scroll-x  scroll-left="120" show-scrollbar="false">
		<view id="dayNew" class="scroll-view-item_H" @click="tobar(id)">每日推荐</view>
		<view id="demo2" class="scroll-view-item_H" @click="tobar2()">私人FM</view>
		<view id="demo3" class="scroll-view-item_H" @click="tobar3()">歌单</view>
		<view id="demo3" class="scroll-view-item_H" @click="tobar4()">排行榜</view>
		<view id="demo3" class="scroll-view-item_H">有声书</view>
		<view id="demo3" class="scroll-view-item_H">数字专辑</view>
		<view id="demo3" class="scroll-view-item_H">直播</view>
		<view id="demo3" class="scroll-view-item_H">关注新歌</view>
		<view id="demo3" class="scroll-view-item_H">收藏家</view>
	</scroll-view>
    
  </view>
  
</template>

<style lang="scss" scoped>
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
}
.scroll-view-item_H {
	display: inline-block;
	width: 150rpx;
	height: 150rpx;
	line-height: 150rpx;
	text-align: center;
	font-size: 36rpx;
}

</style>
