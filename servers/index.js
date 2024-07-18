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

export const getSearchApi = (key) => {
  return request(`${host}/cloudsearch?keywords=${key}`)
}
export const getSearchHotApi = (key) => {
  return request(`${host}/search/hot`)
}