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
const cookies = localStorage.getItem('logined')

export const getBannerApi = () => {
  return request(`${host}/banner?cookie=${cookies}`)
}


export const getSearchApi = (key) => {
  return request(`${host}/cloudsearch?keywords=${key}`)
}
export const getSearchHotApi = (key) => {
  return request(`${host}/search/hot`)
}

// 排行榜
export const getRankApi = ()=>{
	return request(`${host}/toplist/detail`)
}

// 推荐歌单
export const getSystemApi = () => {
  return request(`${host}/personalized?cookie=${cookies}`)
}

// 推荐新音乐
export const getGuessApi = () => {
  return request(`${host}/personalized/newsong?cookie=${cookies}`)
}
// 推荐mv
export const getReMVApi = () => {
  return request(`${host}/personalized/mv?cookie=${cookies}`)
}
// 推荐电台
export const getStationApi = () => {
  return request(`${host}/personalized/djprogram?cookie=${cookies}`)
}
// 获取精品歌单
export const getPlaysongApi = () => {
  return request(`${host}/top/playlist/highquality?cookie=${cookies}`)
}
//歌单
export const getPlaylistApi = (id) => {
  return request(`${host}/playlist/detail?id=${id}`)
}
//歌单评论
export const getSongListApi = (id)=>{
	return request(`${host}/comment/playlist?id=${id}`)
	
}

// 邮箱登录
export const emailLoginApi = ( params ) => {
  return request(`${host}/login?${params}&cookie=${cookies}`)
}

// 二维码登录
export const getQRKeyApi = () => {
  return request(`${host}/login/qr/key?cookie=${cookies}&timestamp=${Date.now()}`)
}
export const getQRCreateApi = (key) => {
  return request(`${host}/login/qr/create?key=${key}&cookie=${cookies}&timestamp=${Date.now()}&qrimg=qrimg`)
}
export const getQRCheckApi = (key) => {
  return request(`${host}/login/qr/check?key=${key}&cookie=${cookies}&timestamp=${Date.now()}`)
}

// 获取登陆状态
export const getLoginApi = () => {
  return request(`${host}/login/status?cookie=${cookies}`)
}

