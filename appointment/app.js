//app.js
App({
  data:{
    clubCardA:[
      {
        "class":"普通会员",
        "number":"62218425",
        "validLimit":"长期有效",
        "therapistN":"阿丽 13号",
        "suggestNum":3,
        "storedValue":1320,
        "couponNum":2,
        "shopNum":4,
      }
    ],
    userMessageA:[{
      "name":"李世民", 
      "sex" :"man", 
      "age":"2011-11-11", 
      "marriage":"N",  
      "phoneNumber":"13125026827",
      "health":"",
      "rNumber":"",
      "remark":"",
   }],
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})