// pages/login/login.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
     
      nickName:'未知用户',
      touxian:'/pages/images/0.png',
      userInfo:''
    },
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail 
      this.setData({
        avatarUrl,
      })
    },
    dianji(){
     
      console.log("点击了按按钮")
      wx.getUserProfile({
        desc: '编辑会员资料',//获取用户的信息
         success:res => {//用户成功授权
          console.log("成功",res.userInfo)
          
            this.data.nickName=res.userInfo.nickName
            this.data.touxian=res.userInfo.avatarUrl
          wx.setStorageSync("nkName",this.data.nickName)
          wx.setStorageSync("avatUrl",this.data.touxian)
           //过1.5s跳转到主页
           setTimeout(function(){
            //重定向跳转不了tabbar页面
          /*  wx.redirectTo({
             url: '/pages/home/home',
           }) */
           wx.switchTab({
             url:'/pages/home/home',
           })
          },1500)
  },
  fail:res=>{
    console.log("失败",res)
  }
})
         
          },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})