<script setup>
  import { ref } from "vue"
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
</script>

<template>
  <view class="mine"  v-if="loginInfo">
    <view class="my-music">我的音乐</view>
    <view class="my-login" @click="toLogin">去登录</view>
  </view>
  <view class="logined" v-else>
    登录成功状态!
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
</style>
