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
<<<<<<< HEAD
}

export const getSystemApi = () => {
  return request(`${host}/personalized`)
}
=======
}
>>>>>>> 271a408426724e8bcfce58ada026266a0ea3481e
