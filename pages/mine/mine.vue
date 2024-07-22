<script setup>
  import { ref } from "vue"
  import { getLoginApi, getUserfollApi,getUserfolledApi, getUserlevelApi, getUserdetailApi,getUserplaylistApi } from "../../servers";
 
  // let arr = ref("")
  const list = ref([]) 
  const list2 = ref([])
  const list3 = ref([])
  const list4 = ref([])
  const list5 = ref([])
  const list6 = ref([])
  const list7 = ref([])
  
  
  const loginInfo = ref(false)
  const toLogin = () => {
    uni.navigateTo({
    	url: '/pages/login/login'
    });
  }
  const isLogin = () => {
    if(localStorage.getItem('logined')) {
      loginInfo.value = false
    }else{
      loginInfo.value = true
    }
  }
  isLogin()
  
  const loginStatus = async() => {
  
  const res = await getLoginApi()
  list.value = res.data.data.profile
  
  const id = list.value?.userId
  // console.log(id);
  const res2 = await getUserfollApi(id)
  list2.value = res2.data.follow

  const res3 = await getUserfolledApi(id)
  list3.value = res3.data.followeds
  
  const res4 = await getUserlevelApi(id)
  list4.value = res4.data.data?.level
  
  const res5 = await getUserdetailApi(id)
  list5.value = res5.data.listenSongs

  const res6 = await getUserplaylistApi(id)
  list6.value = res6.data.playlist
  
  }
  loginStatus()
  
</script>

<template>
  <view class="mine"  v-if="loginInfo">
    <view class="my-music">我的音乐</view>
    <view class="my-login" @click="toLogin">去登录</view>
  </view>
  <view class="logined" v-else :style="{backgroundImage:`url(${list.backgroundUrl})`}">
	  <!-- header -->
    <view class="header" 
      style="
      width: 100%;
      text-align: center;"
    >
		<!-- 头像 -->
    <image :src="list.avatarUrl" alt=""  style="width: 200rpx;height: 200rpx;border-radius: 50%;"/>
		<!-- 姓名 -->
		<view class="toname" style="margin: 40rpx 0;">{{list.nickname}}</view>
		<!-- 关注 粉丝 等级 听歌 -->
		<view class="" style="display: flex;justify-content: space-between; font-size: 24rpx;padding: 0 100rpx;">
			<view class="">{{list3.length}}关注</view>
			<view class="">{{list2.length}}粉丝</view>
			<view class="">Lv.{{list4}}等级</view>
			<view class="">{{list5}}听歌</view>
		</view>
    </view>
  </view>
  
  <!-- 歌单内容 -->
  <view class="main">
	  <!-- 歌单列表 -->
  	<view class="list-left" v-for="(item,index) in list6" :key="index">
		<!-- 左侧图片 -->
  		<img class="list-img" :src="item.coverImgUrl" alt="" />
		<view class="list-right">
			<!-- 标题 -->
			<view class="list-right-1">{{item.name}}</view>
			<!-- 多少首，播放次数 -->
			<view class="list-right-2">
				{{item.trackCount}}首·{{item.playCount}}次播放
			</view>
		</view>
  	</view>
  </view>
</template>

<style lang="scss" scoped>
.mine{
  width: 100%;
  height: 100%;
  view{
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
  }
}
.my-music{
  background: #C84341;
  color: white;
}
.my-login{
  background: #F8F8F8;
  border-bottom: 1rpx solid #ccc;
}
.logined{
	display: flex;
	align-items: center;
	height: 500rpx;
	color: #fff;
	background-position: center;

}
.list-img{
	margin: 0 40rpx;
	width: 100rpx;
	height: 100rpx;
}
.list-left{
	height: 140rpx;
	display: flex;
	align-items: center;
	border-bottom: #F2F2F2 solid 2rpx;
}
.list-right-1{
	font-size: 28rpx;
}
.list-right-2{
	font-size: 24rpx;
	color: #A4A3A8;
}
</style>
