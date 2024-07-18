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