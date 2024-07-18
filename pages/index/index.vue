<script setup>
  import { ref } from 'vue'
  import Banner from './components/Banner/Banner.vue';
  import Menu from './components/Menu/Menu.vue';
	const title = ref('网易云')
</script>

<template>
	<view class="app">
    <view class="header">
      <view class="head-icon"></view>
      <view class="head-search">
        <view class="head-search-icon"></view>
        <view>搜索</view>
      </view>
    </view>
    <Banner />
    <Menu />
	</view>
</template>

<style lang="scss">
	.app{
    display: flex;
    flex-direction: column;
    padding: 30rpx;
  }
  .header{
    display: flex;
    justify-content: space-between;
    height: 80rpx;
    align-items: center;
  }
  .head-icon{
    display: inline-block;
    background-image: url('../../assets/head-left-icon.png');
    background-size: 50rpx 50rpx;
    width: 50rpx;
    height: 50rpx;
    margin-right: 15rpx;
  }
  .head-search{
    flex: 1;
    background: #dbdbdb;
    height: 72rpx;
    border-radius: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8a8a8a;
  }
  .head-search-icon{
    display: inline-block;
    background-image: url('../../assets/head-search.png');
    background-size: 50rpx 50rpx;
    width: 50rpx;
    height: 50rpx;
    margin-right: 15rpx;
  }
</style>
