// pages/userStored/userStored.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeValue:0,
    remainItemA:[
      {
        "name":"酵素浴",
        "num":10,
      },
      {
        "name":"拔罐",
        "num":5,
      },
      {
        "name":"全身淋巴排毒",
        "num":5,
      },
      {
        "name":"洗脚",
        "num":6,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      storeValue:app.data.clubCardA[0].storedValue,
    });
    console.log("储值数据载入");
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