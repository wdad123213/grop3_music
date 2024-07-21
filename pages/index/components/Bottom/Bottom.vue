<template>
	<view class="bottom">
		<view class="bottom-left">
			<image src="../../../../static/images/videodisc.png" mode="" @tap="goPlay" />
			<view class="audio-info" @tap="goPlay">
				<view class="audio-name">
					黄昏
				</view>
				<view class="audio-singer">
					周传雄
				</view>
			</view>
		</view>
		<view class="bottom-right">
			<view class="btn-player">
				<text class="text-black cuIcon-playfill" @tap="goPlay" />
			</view>
			<view class="btn-info">
				<text class="text-black cuIcon-list" />
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue';

	const goPlay = ref(() => {
		uni.navigateTo({
			url: '/pages/player/player'
		});
	});
</script>
<style scoped>
	@import url("./index.css");
</style>