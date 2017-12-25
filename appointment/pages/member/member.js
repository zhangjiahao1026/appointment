// pages/member/member.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    clubClass:"",
    clubNumber:"",
    clubValidLimit:"",
    clubTherapistN:"",
    clubSuggestNum:0,
    clubStoredValue:0,
    clubCouponNum:0,
    clubShopNum:0,
  
  },

  QRcardtab:function(){
    wx.navigateTo({
      url:'../QRcard/QRcard'
    }) 
  },
  userMestab:function(){
    wx.navigateTo({
      url:'../userMessage/userMessage'
    }) 
  },
  userStoredtab:function(){
    wx.navigateTo({
      url:'../userStored/userStored'
    }) 
  },
  discounttab:function(){
    wx.navigateTo({
      url:'../discount/discount'
    }) 
  },
  shopHistorytab:function(){
    wx.navigateTo({
      url:'../shopHistory/shopHistory'
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
    this.setData({
      clubClass : app.data.clubCardA[0].class,
      clubNumber : app.data.clubCardA[0].number,
      clubValidLimit : app.data.clubCardA[0].validLimit,
      clubTherapistN : app.data.clubCardA[0].therapistN,
      clubSuggestNum : app.data.clubCardA[0].suggestNum,
      clubStoredValue : app.data.clubCardA[0].storedValue,
      clubCouponNum : app.data.clubCardA[0].couponNum,
      clubShopNum : app.data.clubCardA[0].shopNum,
    });  
    console.log("会员卡数据载入");
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