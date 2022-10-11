// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToSelf() {
      wx.switchTab({
        url: '/pages/self/self',
      })

    },
    goToCar() {
      wx.switchTab({
        url: '/pages/paycar/paycar',
      })
    },
    goToIntroduce() {
      wx.switchTab({
        url: '/pages/introduce/introduce',
      })
    },
    goToHome() {
      wx.switchTab({
        url: '/pages/home/home',
      })
    },
  }
})