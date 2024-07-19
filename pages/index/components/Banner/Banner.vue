<script setup>
  import { ref } from "vue"
  import { getBannerApi } from "../../../../servers";
  
  const users = ref([])

  const getBanner = async () => {
	const res = await getBannerApi()
	users.value = res.data.banners
	// console.log(res,users.value);
  }
  getBanner()
  
  
</script>
<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-active-color="#fff">
			<swiper-item  v-for="(item,index) in users" :key="index" >
				<view class="swiper-item uni-bg-red"><img :src="item.imageUrl" /></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss">
		
	
	.swiper{
		border-radius: 30rpx;
		overflow: hidden;
		margin: 60rpx 0;
		color: #fff;
		width: 100%;
		font-size: 40rpx;
		text-align: center;
		display: flex;
		align-items: center;

		::v-deep img{
			width: 100%;
			height: 300rpx;
		}
	  }

</style>
