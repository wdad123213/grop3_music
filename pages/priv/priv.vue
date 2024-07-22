<script setup>

import { ref, onMounted, reactive, computed } from 'vue';

// 歌曲信息
const songs = ref([
  {
    name: '偏爱 - 张芸京',
    author: '作词：葛大为 作曲：陈伟 编曲：陈伟',
    src: '/static/music/偏爱.mp3', // 音频文件路径
    duration: 180, // 音频文件时长，单位为秒
  },
  // ... 其他歌曲信息
]);

// 当前播放歌曲索引
const songIndex = ref(0);
// 当前歌曲信息
const song = computed(() => songs.value[songIndex.value]);

// 是否正在播放
const isPlaying = ref(false);
// 当前播放时间
const currentTime = ref(0);
// 总时长
const duration = computed(() => song.value.duration);
// 进度条百分比
const progress = computed(() => (currentTime.value / duration.value) * 100);

// 音频上下文
const audioCtx = uni.createInnerAudioContext();
audioCtx.src = song.value.src;

// 格式化时间
const formatTime = second => {
  const minutes = Math.floor(second / 60);
  const seconds = Math.ceil(second % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// 播放/暂停切换
const togglePlay = () => {
  if (isPlaying.value) {
    audioCtx.pause();
  } else {
    audioCtx.play();
  }
  isPlaying.value = !isPlaying.value;
};

// 上一首
const prevSong = () => {
  if (songIndex.value > 0) {
    songIndex.value--;
  } else {
    songIndex.value = songs.value.length - 1;
  }
  loadNewSong();
};

// 下一首
const nextSong = () => {
  songIndex.value = (songIndex.value + 1) % songs.value.length;
  loadNewSong();
};

加载新歌曲
const loadNewSong = () => {
  audioCtx.src = songs.value[songIndex.value].src;
  audioCtx.play();
  currentTime.value = 0;
};

// 更新播放进度
const updateProgress = e => {
  const newTime = (e.detail.value / 100) * duration.value;
  audioCtx.seek(newTime);
  currentTime.value = newTime;
};

onMounted(() => {
  audioCtx.onTimeUpdate(() => {
    currentTime.value = audioCtx.currentTime;
  });
});
</script>
<template>
  <view class="player">
    <view class="player-info">
      <text class="song-name">{{ song.name }}</text>
      <text class="singer-name">{{ song.author }}</text>
    </view>
    <view class="player-controls">
      <button class="prev" @click="prevSong">上一首</button>
      <button class="play" @click="togglePlay" :class="{playing: isPlaying}"> 
        {{ isPlaying ? '暂停' : '播放' }}
      </button>
      <button class="next" @click="nextSong">下一首</button>
      <input type="range" class="progress-bar" 
             :value="progress" 
             @change="updateProgress" />
      <text>{{ formatTime(currentTime) }} / {{ formatTime(song.duration) }}</text>
    </view>
  </view>
</template>

<style scoped>
.player {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.player-info {
  margin-bottom: 20px;
  text-align: center;
}

.player-controls {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
}

.progress-bar {
  flex: 1;
  margin: 0 10px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: white;
}

button.playing {
  background-color: #ff6347;
}

text {
  margin: 0 10px;
}
</style>
