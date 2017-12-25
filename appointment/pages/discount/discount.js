// pages/discount/discount.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseDiscountF:0,
    discount0A:[
      {
          "value":20,
          "number":"0942435859",
          "itemName":"酵素浴",
          "limitDate":"2017/06/05-2017/07/04",
      },
      {
        "value":20,
        "number":"0942435859",
        "itemName":"酵素浴",
        "limitDate":"2017/06/05-2017/07/04",
      },
      {
        "value":20,
        "number":"0942435859",
        "itemName":"酵素浴",
        "limitDate":"2017/06/05-2017/07/04",
      },
    ],
    discount1A:[
      {
          "value":20,
          "number":"0942435859",
          "itemName":"酵素浴",
          "limitDate":"2017/06/05-2017/07/04",
      },
      {
        "value":20,
        "number":"0942435859",
        "itemName":"酵素浴",
        "limitDate":"2017/06/05-2017/07/04",
      },
     
    ],
    discount2A:[
      {
          "value":20,
          "number":"0942435859",
          "itemName":"酵素浴",
          "limitDate":"2017/06/05-2017/07/04",
      },  
    ],
  },
  chooseDiscountTab:function(e){
    var ds = e.currentTarget.dataset.tab;
    if(ds==0){this.setData({chooseDiscountF:0})}
    else if(ds==1){this.setData({chooseDiscountF:1})}
    else if(ds==2){this.setData({chooseDiscountF:2})}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.data.clubCardA[0].couponNum = this.data.discount0A.length;
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