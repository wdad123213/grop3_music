<script setup>
	import {
		ref
	} from 'vue'
	import Banner from './components/Banner/Banner.vue';
	import Menu from './components/Menu/Menu.vue';
	import System from './components/System/System.vue';
	import Guess from './components/Guess/Guess.vue';
	import ReMV from './components/ReMV/ReMV.vue';
	import Station from './components/Station/Station.vue';
	import Playsong from './components/Playsong/Playsong.vue';
	import Bottom from './components/Bottom/Bottom.vue'
	import {
		getLoginApi
	} from '../../servers';



	const sidebarFlag = ref(false)
	const loginInfo = ref(false)
	const userInfo = ref({})


	const go = () => {
			uni.navigateTo({
				url: '/pages/search/search'
			});
		}
	const isLogin = () => {
		if (localStorage.getItem('logined')) {
			loginInfo.value = false
		} else {
			loginInfo.value = true
		}
	}

	isLogin()
	const getUser = async () => {
		const res = await getLoginApi()
		userInfo.value.name = res.data.data.profile?.nickname
		userInfo.value.img = res.data.data.profile?.avatarUrl
	}
	getUser()
	const toLogin = () => {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}

</script>

<template>
	<view class="app">
		<view class="header">
			<view class="head-icon" @click="sidebarFlag=true"></view>
			<view class="head-search" @click="go">

				<view class="head-search-icon"></view>
				<view>搜索</view>

			</view>
		</view>
		<Banner />
		<Menu />
		<view class="mains">
			
			<System />
			<Guess />
			<ReMV />
			<Station />
			<Playsong />
			<view class="bottom">
				<Bottom />
			</view>
		</view>
		
	</view>

	<view @click="sidebarFlag=false" :class="['sidebar',{ 'sidebar-move': sidebarFlag }]">
		<view class="sidebar-content">
      <button @click.stop="toLogin" v-if="loginInfo">去登录</button>
      <view class="user" v-else>
        <image :src="userInfo.img" mode=""></image>
        {{userInfo.name}}
      </view>
		</view>
	</view>

</template>


<style lang="scss" scoped>
	
	.mains{
		margin-bottom: 200rpx;
	}
	.nav{
		white-space: normal;
	}
	.app {
		display: flex;
		flex-direction: column;
		padding: 30rpx;
	}
	.header {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.head-icon {
		display: inline-block;
		background-image: url('../../assets/head-left-icon.png');
		background-size: 50rpx 50rpx;
		width: 50rpx;
		height: 50rpx;
		margin-right: 15rpx;
	}

	.head-search {
		flex: 1;
		background: #dbdbdb;
		height: 72rpx;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #8a8a8a;
	}

	.head-search-icon {
		display: inline-block;
		background-image: url('../../assets/head-search.png');
		background-size: 50rpx 50rpx;
		width: 50rpx;
		height: 50rpx;
		margin-right: 15rpx;
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		transform: translate(-100%);
		width: 200%;
		height: 100%;
		background: rgba(0, 0, 0, 0);
		transition: transform .3s, background .3s;
	}

	.sidebar-content {
		background: white;
		height: 100%;
		width: 40%;

		button {
			position: absolute;
			width: 150rpx;
			height: 80rpx;
			top: 95rpx;
			left: 10rpx;
			font-size: 14px;
			line-height: 80rpx;
			background-color: #f00;
			color: #fff;
		}
	}

	.sidebar-move {
		transform: translate(0);
		background: rgba(0, 0, 0, 0.5);
	}
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 100rpx;
		left: 0;
		background-color: #FFFF;

	}
  
  .user{
      position: absolute;
      width: 40%;
      height: 120rpx;
      top: 90rpx;
      left: 0;
      font-size: 14px;
      background-color: #ccc;
      color: #000;
      display: flex;
      align-items: center;
      image{
        width: 100rpx;
        height: 100rpx;
        background: #f00;
        border-radius: 50%;
        margin: 10rpx;
      }
    }
</style>

