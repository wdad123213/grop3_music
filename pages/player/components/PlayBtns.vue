<script setup>
import { ref } from 'vue'
import { onLoad } from "@dcloudio/uni-app"
import { getSongApi } from '../../../servers';


const emits = defineEmits(['changePlay'])
const innerAudioContext = uni.createInnerAudioContext()
const slidVal = ref(0)
const slidMax = ref(0)
const start = ref('00:00')
const end = ref('')
const id = ref('')
onLoad((option)=>{
  id.value = option.id
  console.log(id.value)
  const getSon = async() => {
    const res = await getSongApi(id.value)
    innerAudioContext.src = res.data.data[0].url
  }
  getSon()
})

// 格式化日期
const format = time => {
    const m = zero(parseInt(time / 60));
    const s = zero(Math.round(time % 60))
    return `${m}:${s}`
}
// 补零函数
const zero = n => n >= 10 ? n : '0' + n

innerAudioContext.autoplay = true

const changing = (e) => {
  innerAudioContext.currentTime = e.detail.value / 100 * innerAudioContext.duration
}

const onplay = () => {
  if(innerAudioContext.paused){
    innerAudioContext.play()
    emits('changePlay',true)
    return
  }
  innerAudioContext.pause()
  emits('changePlay',false)
}

innerAudioContext.onCanplay(() => {
  console.log('可以播放')
  slidMax.value = innerAudioContext.duration
  end.value = format(slidMax.value)
})

innerAudioContext.onPlay(() => {
  console.log('开始播放')
})

innerAudioContext.onPause(() => {
  console.log('暂停播放')
})

innerAudioContext.onTimeUpdate(() => {
  console.log('音频播放进度更新')
  slidVal.value = innerAudioContext.duration ? innerAudioContext.currentTime / innerAudioContext.duration * 100 : 0
  start.value = format(slidVal.value)
})


innerAudioContext.onError((res) => {
  console.log(res.errMsg);
  console.log(res.errCode);
})



</script>

<template>
	<view class="btns">
		<view class="top">
		  <view class="icon icon-heart"></view>
      <view class="icon icon-gossip"></view>
		</view>
   <view class="btnBar">
      <view class="start">{{start}}</view>
      <view class="bar">
        <slider :value="slidVal" min="0" :max="slidMax" @changing="changing" />
      </view>
      <view class="end">{{end}}</view>
    </view>
    <view class="tool">
      <view class="icon icon-type"></view>
      <view class="icon icon-prev"></view>
      <view class="icon icon-play" @click="onplay"></view>
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
  .start, .end{
    color: #fff;
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