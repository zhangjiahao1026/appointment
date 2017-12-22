// pages/userMessage/userMessage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    userName:'',
    userSex:'',
    userAge:'',
    userMarriage:'',
    userNumber:'',
    userHealth:'',
    rNumber:'',
    userRemark:'',
  },

  userNameInput:function(e){   
    this.setData({userName: e.detail.value});  
    console.log(this.data.userName);
  },
  sexRadioChange:function(e){  
    this.setData({userSex: e.detail.value});  
    console.log(this.data.userSex);
  },
  userAgeInput:function(e){   
    this.setData({userAge: e.detail.value});  
    console.log(this.data.userAge);
  },
  marriageRadioChange:function(e){  
    this.setData({userMarriage: e.detail.value});  
    console.log(this.data.userMarriage);
  },
  userNumberInput:function(e){   
    this.setData({userNumber: e.detail.value});  
    console.log(this.data.userNumber);
  },
  userHealthInput:function(e){   
    this.setData({userHealth: e.detail.value});  
    console.log(this.data.userHealth);
  },
  rNumberInput:function(e){   
    this.setData({rNumber: e.detail.value});  
    console.log(this.data.rNumber);
  },
  userRemarkInput:function(e){   
    this.setData({userRemark: e.detail.value});  
    console.log(this.data.userRemark);
  },

  saveTab:function(e){ 
    app.data.userMessageA[0].name=this.data.userName;
    app.data.userMessageA[0].sex=this.data.userSex;
    app.data.userMessageA[0].age=this.data.userAge;
    app.data.userMessageA[0].marriage=this.data.userMarriage;
    app.data.userMessageA[0].phoneNumber=this.data.userNumber;
    app.data.userMessageA[0].health=this.data.userHealth;
    app.data.userMessageA[0].rNumber=this.data.rNumber;
    app.data.userMessageA[0].remark=this.data.userRemark;
    console.log("保存成功"); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({userName : app.data.userMessageA[0].name});
    this.setData({userSex : app.data.userMessageA[0].sex});
    this.setData({userAge : app.data.userMessageA[0].age});
    this.setData({userMarriage : app.data.userMessageA[0].marriage});
    this.setData({userNumber : app.data.userMessageA[0].phoneNumber});
    this.setData({userHealth : app.data.userMessageA[0].health});
    this.setData({rNumber : app.data.userMessageA[0].rNumber});
    this.setData({userRemark : app.data.userMessageA[0].remark});
    console.log("用户数据载入"); 
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