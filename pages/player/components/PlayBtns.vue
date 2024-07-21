<script setup>
  
</script>

<template>
	<view class="btns">
		<view class="top">
		  <view class="icon icon-heart"></view>
      <view class="icon icon-gossip"></view>
		</view>
   <!-- <view class="btnBar">
      <view class="start">0:00</view> -->
      <view class="bar">
        <slider value="0" @change="sliderChange" step="5" />
      </view>
      <!-- <view class="end">0:00</view>
    </view> -->
    <view class="tool">
      <view class="icon icon-type"></view>
      <view class="icon icon-prev"></view>
      <view class="icon icon-play"></view>
      <view class="icon icon-next"></view>
      <view class="icon icon-list"></view>
    </view>
	</view>
</template>


<style lang="scss" scoped>
  .btns{
    width: 80vw;
    height: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(-20rpx);
  }
  .top, .tool{
    display: flex;
    justify-content: space-between;
  }
  .top{
    justify-content: center;
  }
  .icon{
    width: 80rpx;
    height: 80rpx;
    background: red;
  }
  .icon-heart{
    background: url('../../../assets/红心.png');
    background-size:80rpx;
    margin-right: 100rpx;
  }
  .icon-gossip{
    background: url('../../../assets/信息.png');
    background-size:80rpx;
  }
  .icon-type{
    background: url('../../../assets/循环.png');
    background-size:80rpx;
  }
  .icon-prev{
    background: url('../../../assets/左箭头.png');
    background-size:80rpx;
  }
  .icon-play{
    background: url('../../../assets/play.png');
    background-size:80rpx;
  }
  .icon-next{
    background: url('../../../assets/右箭头.png');
    background-size:80rpx;
  }
  .icon-list{
    background: url('../../../assets/列表.png');
    background-size:80rpx;
  }
</style>