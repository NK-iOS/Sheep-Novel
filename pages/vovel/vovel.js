// pages/vovel/vovel.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerArr: [],
    dataArr: [],
    menuArr: [{ title: "分类", icon: "/ranking-cover/142319166399949" }, { title: "排行榜", icon:"/ranking-cover/142319144267827"}],
    baseImgUrl: app.globalData.DoMainStoryImageUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this

    // 滚动视图数据
    wx.request({
      url: app.globalData.DoMainStoryUrl +'ranking/54d42d92321052167dfb75e3',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.ok) {
          var items = res.data.ranking.books.splice(0,8);
          items[0].selected = true;
          console.log(items);
          that.setData({
            headerArr: items
          });
        }
      },
      fail: function (error) {
        console.log(error)
      }
    })

    // 分类列表
    wx.request({
      url: app.globalData.DoMainStoryUrl+'cats/lv2/statistics',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);
        if(res.data.ok){
          var items = [
            {
              name:"男生",
              cates: res.data.male
            },
            {
              name: "女生",
              cates: res.data.female
            },
            {
              name: "出版",
              cates: res.data.press}
          ];
          that.setData({
            dataArr: items
          });
          console.log(res.data.male)
        }
      },
      fail: function(error) {
        console.log(error)
      }
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

  //轮播图绑定change事件，修改图标的属性是否被选中
  switchTab: function (e) {
    var sliderList = this.data.headerArr;
    var i, item;
    for (i = 0; item = sliderList[i]; ++i) {
      item.selected = e.detail.current == i;
    }
    this.setData({
      headerArr: sliderList
    });
  },
})