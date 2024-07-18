<script setup>
  import { ref } from 'vue'
  import Banner from './components/Banner/Banner.vue';
  import Menu from './components/Menu/Menu.vue';
	const title = ref('网易云')
</script>

<template>
	<view class="app">
    <view class="header">
      <view class="head-icon">图标</view>
      <view class="head-search">搜索</view>
    </view>
    <Banner />
    <Menu />
	</view>
</template>

<style lang="scss">
	.app{
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    justify-content: space-between;
  }
  .head-search{
    flex: 1;
  }
</style>
