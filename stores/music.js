import { defineStore } from 'pinia'
import { ref } from "vue";

export const useMusicStore = defineStore('music', () => {
  const curMusic = ref(null)
  const curMusicSrc = ref("")
  
  return {
    curMusic,
    curMusicSrc
  }
})