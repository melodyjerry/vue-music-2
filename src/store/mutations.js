// 3
import * as types from './mutation-types'

const mutations = {
  // 歌手
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  // 播放状态
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  // 是否全屏
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  // 播放列表
  [types.SET_PLAY_LIST](state, list) {
    state.playList = list
  },
  // 顺序列表
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  // 播放模式
  [types.SET_MODE](state, mode) {
    state.mode = mode
  },
  // 当前播放的音乐的索引
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  // 歌单
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  // 排行榜单
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  // 搜索历史
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
  // 播放历史
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  // 我喜欢的
  [types.SET_FAVORITE_LIST](state, list) {
    // console.log(list)
    state.favoriteList = list
  }
}

export default mutations