// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    /**
     * @name 小程序初始化时触发，全局只触发一次
     */
    wx.checkSession({
      success: (res) => {
              //key未过期
              console.log('key未过期')
      },
      fail : (res)=>{
        //key过期需要重新登录
        console.log('key过期')
            // 登录
        wx.login({
          success(res) {
            if (res.code) {
              //发起网络请求
             // console.log(res.code)
              var u = 'http://1.117.88.81:9958/api/Login?code=' + res.code
             // console.log(u)
              wx.request({
                // 请求连接
                url: u,
                method: 'GET',
                // 请求所需要的的参数
                /*   data: {
                    code: res.code
                  },  */
                // 请求成功之后,将信息存储至storage 中
                success(r) {
                  if (r) {
                   console.log(r.data)
                  } else {
                    console.log('err')
                  }
                  // 将返回信息存储至storage中 
                  wx.setStorage({
                    key: "userinfo",
                    data: r
                  });
                },
                fail(t) {
                  console.log('err')
                }
              });
            } else {
              console.log('登录失败！' + res.errMsg)
            } //*/
          }
        });
      }
    })

  


  },
  globalData: {
    userInfo: null
  }
})