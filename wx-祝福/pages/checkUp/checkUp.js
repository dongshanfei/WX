// pages/checkUp/checkUp.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    notAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.total) {
      that.setData({
        notAll: false
      })
      that.checkAll();
      return false;
    };
    console.log('checkUp', options);
    app.ajax('?action=getLikes', {zhufu_id:options.zhufu_id}, function(res) {
      console.log(res.data.data);
      that.setData({
        list: res.data.data
      });
    })
  },
  checkAll: function (e) {
    var that = this;
    app.ajax('?action=getLikes', {}, function(res) {
      console.log(res.data.data);
      that.setData({
        list: res.data.data,
        notAll: false
      });
    })
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
  
  },
  goRanking:function(){
    wx.switchTab({
      url: '../ranking/ranking',
    })
  }
})