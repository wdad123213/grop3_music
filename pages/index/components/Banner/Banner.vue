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
  <van-swipe-item v-for="(item,index) in users" :key="index" ><img :src="item.imageUrl" style="width: 375px;"/></van-swipe-item>
</van-swipe>
</template>


<style lang="scss">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
	height: 139px;
    line-height: 139px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>
