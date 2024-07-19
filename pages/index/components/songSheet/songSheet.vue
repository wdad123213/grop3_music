<script setup>
	import { ref } from 'vue';
	import { getPlaylistApi } from "@/servers/index.js"
	
	const songlist =ref([])
	const ids = ref('')

	ids.value = window.location.hash.split("?")[1].split("=")[1]
	console.log(ids.value)
	const getlist = async()=>{
		const res = await getPlaylistApi(ids.value)
		console.log(res.data.playlist)
		
		songlist.value = res.data.playlist
	}
	getlist()
</script>
<template>
	<view class="songtop">
		<view class="bg" :style="{ backgroundImage: `url(${songlist.coverImgUrl})`}" >
		  <view class="after" ></view>
		</view>
		<view class="info">
			<image :src=songlist.coverImgUrl ></image>
			<view class="header-right">
			  <view class="title">{{songlist.name}}</view>
			  <view class="creator">
				<image src="https://p1.music.126.net/kMuXXbwHbduHpLYDmHXrlA==/109951168152833223.jpg" ></image>
				<view class="nickname">
				  网易云音乐
				</view>
			  </view>
			</view> 
		</view>
		<view class="desc">
			  {{songlist.description}}
		</view>
		
		<view class="songout">
			<span><uni-icons type="redo" size="30"></uni-icons>{{songlist.shareCount}}</span>
			<span><uni-icons type="chat" size="30"></uni-icons>{{songlist.commentCount}}</span>
			<span><uni-icons type="folder-add" size="30"></uni-icons>{{songlist.subscribedCount}}</span>
		</view>
		
	</view>
	
	<view class="songlist">
		<span>▶播放全部</span>
		<ol>
			
			<li v-for="(it,ind) in songlist.tracks">
				<view class="index">
					{{ ind+1 }}
				</view>
				<view class="con">
					{{it.name}}
					<view class="singer">
						<span v-for="(i,info) in it.ar">{{i.name}}<b v-if="!(info===it.ar.length-1)">/</b></span>
					</view>
				</view>
				
			</li>
		</ol>
		
	</view>
		
		
		
		
</template>

<style lang="scss" scoped>
.header-right,.desc,.songout{
	z-index: 9;
}
.songtop{
 padding: 30rpx;
  position: relative;
  overflow: hidden;
  color: #000;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(20px);
    transform: scale(1.5);
    .after {
      height: 100%;
      background: rgba(0,0,0,0.25);
    }
  }
  .info {
    display: flex;
    image {
      width: 240rpx;
      height: 240rpx;
      border-radius: 20rpx;
    }
  }
  .header-right {
    flex: 1;
    overflow: hidden;
    margin-left: 30rpx;
    .title {
      font-weight: bold;
    }
  }
  .creator {
    display: flex;
    align-items: center;
    margin-top: 20rpx;
    image {
      width: 50rpx;
      height: 50rpx;
      border-radius: 50%;
    }
    .nickname {
      margin-left: 16rpx;
      flex: 1;
      overflow: hidden;
      font-size: 12px;
    }
  }
  .desc{
	position: relative;
	font-size: 12px;
	margin: 20rpx 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
  }

}
.songout{
	position: relative;
	display: flex;
	span{
		display: inline-block;
		flex: 1;
		margin-right: 30rpx;
		height: 70rpx;
		border-radius: 40rpx;
		background: rgba(167, 167, 167, 0.2);
		
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
.songlist{
	display: flex;
	background-color: #fff;
	position: relative;
	flex-direction: column;
	li{
		display: flex;
		height: 120rpx;
		font-size: 25rpx;
		flex-wrap: wrap;
		position: relative;
		align-items: center;
		border-bottom: 1px solid #aaa;
		padding-left: 20rpx;
		margin-top: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		
		// line-height: 120rpx;
		.index{
			margin-right: 10rpx;
		}
	}
}
	       
</style>
