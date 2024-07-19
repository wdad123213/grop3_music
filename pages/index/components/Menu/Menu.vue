<script setup>
  import { ref } from "vue"

const menuTb = ref([
	{names:"每日推荐",img:"https://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",url:"/pages/index/components/Menu/components/dayNew"},
	{names:"私人FM",img:"https://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/index/components/Menu/components/priv"},
	{names:"歌单",img:"https://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",url:"/pages/index/components/songSheet/songSheet"},
	{names:"排行榜",img:"https://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg", url:"/pages/index/components/Menu/components/rank"},
	{names:"有声书",img:"https://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg"},
	{names:"数字专辑",img:"https://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg"},
	{names:"直播",img:"https://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg"},
	{names:"关注新歌",img:"https://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg"},
	{names:"收藏家",img:"https://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg"}
])
	
function tobar(e){
  uni.navigateTo({
	  url:e,
	  })
}
<<<<<<< HEAD

=======
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
	
>>>>>>> Feng



</script>

<template>
	
  <view>
<<<<<<< HEAD
	<scroll-view class="scroll-view_H" scroll-x  scroll-left="120" show-scrollbar="false" style="display: flex; align-items: center;">
		<view  class="scroll-view-item_H"  v-for="(item,i) in menuTb" :id="i" @click="tobar(item.url)">
			<img :src="item.img" alt="" />
			<span>{{item.names}}</span>
		</view>
=======
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
>>>>>>> Feng
	</scroll-view>
    
  </view>
  
</template>

<style lang="scss" scoped>
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
	height: 20%;
	padding-bottom: 40rpx;
	margin-bottom: 20rpx;
}
.scroll-view-item_H {
	display: inline-block;
	width: 140rpx;
	height: 100rpx;
	line-height: 80rpx;
	text-align: center;
	font-size: 36rpx;
	img{
		background: red;
		height: 60rpx;
		width: 60rpx;
		border-radius: 50%;
		display: flex;
		margin: 20rpx 0 0 30rpx;
		
		
	}
	span{
		font-size: 24rpx;
	}
}

</style>
