<script setup>
  import { ref } from "vue"

const menuTb = ref([
	{names:"每日推荐",image:"https://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg"},
	{names:"私人FM",image:"https://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/priv/priv"},
	{names:"歌单",image:"https://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg"},
	{names:"排行榜",image:"https://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg", url:"/pages/rank/rank"},
	{names:"有声书",image:"https://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg"},
	{names:"数字专辑",image:"https://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg"},
	{names:"直播",image:"https://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg"},
	{names:"关注新歌",image:"https://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg"},
	{names:"收藏家",image:"https://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg"}
])
	
function tobar(e){
	if (!e) return
	uni.navigateTo({
		  url:e,
		  })
}


</script>

<template>
	
  <view>
	<view class="scroll-view_H">
		<view  class="scroll-view-item_H"  v-for="(item,i) in menuTb" :id="i" @click="tobar(item.url)">
			<image :src="item.image" alt="" />
			<view class="inname">{{item.names}}</view>
		</view>
	</view>
	
  </view>
  
</template>

<style lang="scss" scoped>
.scroll-view_H {
	height: 160rpx;
	display: flex;
	align-items: center;
	text-align: center;
	overflow-x: auto;
}

.scroll-view-item_H {
	image{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin: 0 30rpx;
		background-color: #C84341;	
	}
	.inname{
		font-size: 24rpx;
	}
}
	.scroll-view_H::-webkit-scrollbar{
		display: none;
	}
</style>
