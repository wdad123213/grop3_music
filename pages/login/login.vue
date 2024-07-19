<script setup>
import { ref, watch } from 'vue'
import { 
  emailLoginApi,
  getQRKeyApi,
  getQRCreateApi,
  getQRCheckApi
} from '../../servers'
  
const curType = ref(0)
const emailCode = ref('')
const emailPsd = ref('')
const img = ref('')


const emailSubmit = async () => {
  if(emailCode.value === '' || emailPsd.value === ''){
    return
  }
  const reg = /^\w+@163\.com$/
  if(!reg.test(emailCode.value)){
    console.log('邮箱错误')
    emailCode.value = emailPsd.value = ''
    return
  }
  const formString = `email=${emailCode.value}&password=${emailPsd.value}`
  const res = await emailLoginApi( formString )
  console.log(res)
  uni.setStorageSync('logined', res.data.cookie);
  uni.navigateTo({
  	url: '/pages/index/index'
  });
}

let timer = null
const QRLogin = async () => {
  curType.value = 2
  clearInterval(timer)
  const key = await getQRKeyApi()
  const res = await getQRCreateApi(key.data.data.unikey)
  img.value = res.data.data.qrimg
  timer = setInterval( async() => {
    let check = await getQRCheckApi(key.data.data.unikey)
    console.log(check.data.message)
    if(check.data.code === 802){
      console.log(check.data.message)
      console.log(check)
      console.log(check.data)
    }
    if(check.data.code === 803){
      console.log('login success !')
      console.log(check)
      console.log(check.data)
      clearInterval(timer)
      uni.setStorageSync('logined', check.data.cookie);
      uni.switchTab({
      	url: '/pages/mine/mine'
      });
    }
  },1000)
}

watch(() => curType.value,() => {
  clearInterval(timer)
})

</script>

<template>
  <view>
    <view class="uni-form-code" v-if="curType === 0">
      <view>
        <input focus placeholder="请输入手机号" />
      </view>
      <view>
        <input placeholder="请输入验证码" />
        <button>获取验证码</button>
      </view>
    </view>
    <view class="uni-form-email" v-if="curType === 1">
      <view>
        <uni-icons type="email" size="30"></uni-icons>
        <input focus placeholder="请输入邮箱" v-model.trim="emailCode"/>
      </view>
      <view>
        <uni-icons type="locked" size="30"></uni-icons>
        <input password type="text" placeholder="请输入密码" v-model.trim="emailPsd"/>
      </view>
      <button @click="emailSubmit">提交</button>
    </view>
    <view class="uni-form-QRcode" v-if="curType === 2">
      <image :src="img" mode=""></image>
    </view>
    <view class="login-type">
      <view @click="curType = 0">手机号登录</view>
      <view @click="curType = 1">邮箱登录</view>
      <view @click="QRLogin">二维码登录</view>
    </view>
  </view>
</template>


<style lang="scss" scoped>
  .uni-form-code{
    padding: 20rpx;
    view{
      margin: 20rpx 0;
      display: flex;
      align-items: center;
      input{
        flex: 1;
        border-radius: 10rpx;
        height: 80rpx;
        border: 2rpx solid #ccc;
        padding-left: 30rpx;
      }
      button{
        height: 80rpx;
        background: #C84341;
        color: #fff;
        margin-left: 5rpx;
        line-height: 80rpx;
      }
    }
  }
  .uni-form-email{
    padding: 20rpx;
    view{
      margin: 20rpx 0;
      display: flex;
      align-items: center;
      border: 2rpx solid #ccc;
      border-radius: 10rpx;
      input{
        flex: 1;
        height: 80rpx;
        padding-left: 10rpx;
      }
    }
    button{
      height: 80rpx;
      background: #C84341;
      color: #fff;
      margin-left: 5rpx;
      line-height: 80rpx;
    }
  }
  .uni-form-QRcode{
    display: flex;
    justify-content: center;
    align-items: center;
    image{
      width: 500rpx;
      height: 500rpx;
    }
  }
  .login-type{
    display: flex;
    justify-content: space-between;
    padding: 0 100rpx;
  }
</style>
