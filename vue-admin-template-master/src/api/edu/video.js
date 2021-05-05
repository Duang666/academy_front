import request from '@/utils/request'

export default {

  // 1 添加小节
  addVideo(video) {
    return request({
      url: `/eduservice/video/addVideo`,
      method: 'post',
      data: video
    })
  },

  // 2 根据id查询章节
  getVideo(videoId) {
    return request({
      url: `/eduservice/video/getVideoInfo/${videoId}`,
      method: 'get'
    })
  },

  // 3 修改小节
  updateVideo(video) {
    return request({
      url: `/eduservice/video/updateVideo`,
      method: 'post',
      data: video
    })
  },

  // 4 删除小节
  deleteVideo(videoId) {
    return request({
      url: `/eduservice/video/${videoId}`,
      method: 'delete'
    })
  },

  // 5 删除视频
  deleteAliyunVideo(id) {
    return request({
      url: `/eduvod/video/removeAliyunVideo/${id}`,
      method: 'delete'
    })
  }
}
