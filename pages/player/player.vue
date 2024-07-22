<script setup>
  
import PlayBtns from './components/PlayBtns.vue'
import {
    ref,
		onMounted,
		getCurrentInstance
	} from 'vue';
import { useMusicStore } from '../../stores/music'

const musicStore = useMusicStore()

onMounted(() => {
  const instance = getCurrentInstance().proxy;
  const eventChannel = instance.getOpenerEventChannel();
  eventChannel.on('acceptDataFromOpenerPage', function(data) {
    console.log('Received data in Player:', data);
    song.value = data
    musicStore.curMusic = data
    imgUrl.value = data?.data.al.picUrl
    id.value = data?.data.privilege.id
  });
});

const song = ref(null)
const imgUrl = ref('')
const id = ref('')
const isPlay = ref(true)
const changePlay = (flag) => {
  isPlay.value = flag
}
</script>
<template>
	<view class="bg" :style="{ background:`url(${imgUrl}) center` }"></view>
  <view class="player">
    <view :class="['player-song-bg', {'player-rotate':isPlay}]" >
      <view class="player-song" :style="{ background:`url(${imgUrl}) center` }">
      </view>
    </view>
    <PlayBtns @changePlay="changePlay" :songId="id" />
  </view>
</template>

<style lang="scss" scoped>
.bg{
  position: fixed;
  width: 100%;
  height: calc(100vh - 44px);
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
  animation: music 7s infinite linear paused;
}
.player-rotate{
  animation: music 7s infinite linear;
}
.player-song{
  width: 50vw;
  height: 50vw;
  background: red;
  border-radius: 50%;
  background-size: 50vw 50vw;
}
</style>