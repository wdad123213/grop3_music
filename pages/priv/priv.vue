<script setup>
	
</script>

<template>
  <view>
    私人

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

