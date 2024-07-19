export const request = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      ...options,
      success: resolve,
      fail: reject
    })
  })
}

const host = 'https://zyxcl.xyz/music/api'

export const getBannerApi = () => {
  return request(`${host}/banner`)
}

// 排行榜
export const getRankApi = ()=>{
	return request(`${host}/toplist/detail`)
}

// 推荐歌单
export const getSystemApi = () => {
  return request(`${host}/personalized`)
}

// 推荐新音乐
export const getGuessApi = () => {
  return request(`${host}/personalized/newsong`)
}
// 推荐mv
export const getReMVApi = () => {
  return request(`${host}/personalized/mv`)
}
// 推荐电台
export const getStationApi = () => {
  return request(`${host}/personalized/djprogram`)
}
// 获取精品歌单
export const getPlaysongApi = () => {
  return request(`${host}/top/playlist/highquality`)
}
//歌单
export const getPlaylistApi = (id) => {
  return request(`${host}/playlist/detail?id=${id}`)
}


