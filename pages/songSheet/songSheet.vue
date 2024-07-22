<script setup>
	import { ref } from 'vue';
	import { getPlaylistApi,getSongListApi,allSongApi,songMp3Api} from "@/servers/index.js"
	import { onLoad } from '@dcloudio/uni-app'
	
	
	const songlist =ref([])
	const overlay = ref(false)
	
	const ids = ref('')
	const comments = ref([])
	const allSong = ref([])
	const songMp3 = ref([])
	
	onLoad((opej)=>{
		// 获取id
		ids.value = opej.id
		const getlist = async()=>{
			const res = await getPlaylistApi(ids.value)
			songlist.value = res.data.playlist
		}
		// 用户评论
		const comment = async()=>{
			const res = await getSongListApi(ids.value)

			comments.value = res.data.comments
		
		}
		const allSong = async()=>{
			const res = await allSongApi(ids.value)
			allSong.value = res.data.songs

		}
		
		getlist()
		comment()
		allSong()
		
	})
	

	
	const songCommon = (e)=>{	
		console.log(e)
			uni.navigateTo({
				url: '/pages/player/player',
				events: {
					// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
					acceptDataFromOpenedPage: function(e) {
						console.log(e)
					},
					someEvent: function(e) {
						console.log(e)
					}
	
				},
				success: function(res) {
					// 通过eventChannel向被打开页面传送数据
					res.eventChannel.emit('acceptDataFromOpenerPage', {
						data: e
					})
				}
			});

		
	}

	const searchPlay = (e) => {
		console.log(e)
		uni.navigateTo({
			url: '/pages/player/player',
			events: {
				// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
				acceptDataFromOpenedPage: function(e) {
					console.log(e)
				},
				someEvent: function(e) {
					console.log(e)
				}
			},
			success: function(res) {
				// 通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('acceptDataFromOpenerPage', {
					data: e
				})
			}
		});
	}
	
</script>
<template>
	<view :class="['song',{'hide':overlay}]">
		
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
				
				<view><uni-icons type="redo" size="30"></uni-icons>{{songlist.shareCount}}</view>
				<view @click="overlay='true'"><uni-icons type="chat" size="30"></uni-icons>{{songlist.commentCount}}</view>
				<view><uni-icons type="folder-add" size="30"></uni-icons>{{songlist.subscribedCount}}</view>
			</view>
		</view>
		
	
		<view class="songlist">
			<view class="toview"> <view class="bfbg">▶</view>播放全部({{songlist.tracks?.length}})</view>
			<view class="ul">
				
				<view class="li" v-for="(it,ind) in songlist.tracks" @click="searchPlay(it)">

					<view class="index">
						{{ ind+1 }}
					</view>
					<view class="con">
						<view class="con-top">
							{{it.name}}
						</view>
						<view class="singer">
							<view v-for="(i,info) in it.ar">{{i.name}}</view>
							<view v-if="!(info===it.ar.length-1)">/</view>
							<image class="toimg" src="@/assets/更多.png" />
						</view>
					</view>
				</view>
			</view>
		
		</view>
	</view>
	<view class="overlay" v-if="overlay">
		<view class="mc" @click="overlay=false">
		</view>
		<scroll-view class="popup" scroll-y="true">
			<view class="newComment">
				<b style="color: red;padding: 0 10rpx;">|</b>最新评论
			</view>

			<view v-for="item in comments" class="userList">
				<view class="img">
					<img :src="item.user.avatarUrl" alt="" />
				</view>
				<view class="userInfor">
					<view>{{item.user.nickname}}</view>
					<view class="commenting">{{item.content}}</view>

				</view>

			</view>
		</scroll-view>
	
	</view>
	
	
		
		
		
</template>

<style lang="scss" scoped>
	.song {
		height: calc(100vh - 44px);
	}
	.hide {
		overflow: hidden;
	}
.header-right,.desc,.songout{
	z-index: 9;
}
.songtop{
 padding: 60rpx 30rpx;
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
	
	view{
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
	border-radius: 20rpx;
	overflow: hidden;
	margin-top: -20rpx;
	.toview{
		font-size: 28rpx;
		color: #fff;
		padding:30rpx;
		display: flex;
		align-items: center;
		background-color:#797979;
		border-bottom: 2rpx solid #aaa;
		.bfbg{
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: red;
			width: 60rpx;
			height:60rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
	}
	
	.ul{
		padding-left: 0rpx;
		.li{
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 25rpx;
			align-items: center;
			padding: 0 40rpx;
			color: #fff;
			border-bottom: 1px solid #aaa;
			background-color: #797979;
		.con-top,.singer{
			display: flex;
			height: 40rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
		}
		.singer{
			width: 400rpx;
			height: 30rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.index{
			margin-right: 40rpx;
		}
	}
	}
}
	.toimg{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: 30%;
		left: 90%;
	}
	
	
	
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;

	.mc {
		width: 100%;
		height: 40%;
	}

	.popup {
		position: fixed;
		top: 40%;
		left: 0;
		width: 100%;
		height: 60%;
		background: #fff;
		z-index: 1001;

		.newComment {
			margin: 10rpx;
		}

		.userList {
			display: flex;
			height: 130rpx;
			border-bottom: 2rpx #aaa solid;
			align-items: center;

			.img {
				width: 50rpx;
				height: 50rpx;
				margin: 0 30rpx;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.commenting {
				color: #999999;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

			}

		}

	}


}
</style>

