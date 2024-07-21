<script setup>
  import PlayBtns from './components/PlayBtns.vue';
  
</script>


<template>
	<view class="player-bg"></view>
  <view class="player">
    <view class="player-song-bg">
      <view class="player-song">
      </view>
    </view>
    <PlayBtns />
  </view>
</template>



<style lang="scss" scoped>
.player-bg{
  position: fixed;
  width: 100%;
  height: calc(100vh - 44px);
  background: url(http://p1.music.126.net/i-ExArwiQfpTLmlmIWwU5Q==/109951169783068621.jpg) center ;
  background-size: 100vh;
  filter: blur(20rpx) brightness(70%);
  z-index: -999;
}
.player{
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@keyframes music {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.player-song-bg{
  width: 80vw;
  height: 80vw;
  background: red;
  margin-top: 200rpx;
  border-radius: 50%;
  background: url(https://zyxcl.github.io/music/assets/disc-23c9ad09.png) center;
  background-size: 80vw 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // animation: music 5s infinite linear;
}
.player-rotate{
  animation: music 5s infinite linear;
}
.player-song{
  width: 50vw;
  height: 50vw;
  background: red;
  border-radius: 50%;
  background: url(http://p1.music.126.net/i-ExArwiQfpTLmlmIWwU5Q==/109951169783068621.jpg) center ;
  background-size: 50vw 50vw;
}
</style>