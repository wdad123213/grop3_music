<script setup>
  import { ref } from "vue"

const menuTb = ref([
	{names:"每日推荐",img:"https://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg"},
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
	if(!e) return
  uni.navigateTo({
	  url:e,
	  })
}


</script>

<template>
	
  <view>

	<scroll-view class="scroll-view_H" scroll-x  scroll-left="120" show-scrollbar="false" style="display: flex; align-items: center;">
		<view  class="scroll-view-item_H"  v-for="(item,i) in menuTb" :id="i" @click="tobar(item.url)">
			<img :src="item.img" alt="" />
			<span>{{item.names}}</span>
		</view>
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
