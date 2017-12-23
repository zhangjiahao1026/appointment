// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     consumeFlag:0,
     consumingA:[      
        {
          "item":"酵素浴",
          "shop":"跬步堂积玉桥店",
          "time":"2017-06-05  14:00-15:00",
          "explain":"预约项目保留10分钟",
        },
        {
          "item":"酵素浴+A+B",
          "shop":"跬步堂积玉桥店",
          "time":"2017-06-05  14:00-15:00",
          "explain":"预约项目保留10分钟",
        },
        {
          "item":"酵素浴+A+B",
          "shop":"跬步堂积玉桥店",
          "time":"2017-06-05  14:00-15:00",
          "explain":"预约项目保留10分钟",
        },
      ],
      consumedA:[      
        {
          "item":"酵素浴",
          "shop":"跬步堂积玉桥店",
          "time":"2017-06-05  14:00-15:00",
          "explain":"预约项目保留10分钟",
        },
        {
          "item":"酵素浴+A+B",
          "shop":"跬步堂积玉桥店",
          "time":"2017-06-05  14:00-15:00",
          "explain":"预约项目保留10分钟",
        },
        
      ]
  },

  chooseConsume:function(e){
       var ds = e.currentTarget.dataset.tab;
       if(ds==0){this.setData({consumeFlag:0})}
       else{this.setData({consumeFlag:1})}
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