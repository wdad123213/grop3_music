<script setup>
  import { ref } from "vue"
  import { getBannerApi } from "../../../../servers";
  
  const users = ref([])

  const getBanner = async () => {
	const res = await getBannerApi()
	users.value = res.data.banners
	console.log(res,users.value);
  }
  getBanner()
  
  
</script>

<template>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
	  <van-swipe-item v-for="(item,index) in users" :key="index" ><img :src="item.imageUrl" /></van-swipe-item>
	</van-swipe>
</template>

<style lang="scss">
  .my-swipe .van-swipe-item {
    color: #fff;
	width: 100%;
    font-size: 40rpx;
    text-align: center;
	display: flex;
	align-items: center;
	::v-deep img{
		width: 100%;
	}
  }

</style>
