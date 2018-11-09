import wx from 'weixin-js-sdk'
import Config from '../config'

export default{
  WxFenXiang:function(config)
  {
    if(config == '')
    {
      config = Config.FENXiang;
    }
    console.log(config);
    var fxData = config;
    var JSSDK = JSON.parse(localStorage.getItem(Config.SToRAGEKEYNAmeJSSDK));
    wx.config(JSSDK);
    wx.ready(function() { //通过ready接口处理成功验证
      // config信息验证成功后会执行ready方法
        wx.onMenuShareAppMessage({ // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用
          desc: fxData.desc, // 分享描述
          title: fxData.title, // 分享标题
          link: fxData.link,
          imgUrl: fxData.imgUrl, // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
          // 用户确认分享后执行的回调函数
          },
          cancel: function() {
          // 用户取消分享后执行的回调函数
          }
        });

        wx.onMenuShareTimeline({ //分享朋友圈
          title: fxData.title, // 分享标题
          link: fxData.link,
          imgUrl: fxData.imgUrl, // 分享图标
          success: function() {
          // 用户确认分享后执行的回调函数
          },
          cancel: function() {
          // 用户取消分享后执行的回调函数
          }
        });

        // 分享到QQ
        wx.onMenuShareQQ({
          title: fxData.title, // 分享标题
          desc: fxData.desc, // 分享描述
          link: fxData.link,
          imgUrl: fxData.imgUrl, // 分享图标
          success: function () {
          // 用户确认分享后执行的回调函数
          },
          cancel: function () {
          // 用户取消分享后执行的回调函数
          }
        });

        // 分享到腾讯微博
        wx.onMenuShareWeibo({
          title: fxData.title, // 分享标题
          desc: fxData.desc, // 分享描述
          link: fxData.link,
          imgUrl: fxData.imgUrl, // 分享图标
          success: function () {
          // 用户确认分享后执行的回调函数
          },
          cancel: function () {
          // 用户取消分享后执行的回调函数
          }
        });

        // 分享到QQ空间
        wx.onMenuShareQZone({
          title: fxData.title, // 分享标题
          desc: fxData.desc, // 分享描述
          link: fxData.link,
          imgUrl: fxData.imgUrl, // 分享图标
          success: function () {
          // 用户确认分享后执行的回调函数
          },
          cancel: function () {
          // 用户取消分享后执行的回调函数
          }
        });
    });
    wx.error(function(res){//通过error接口处理失败验证
      // config信息验证失败会执行error函数
    });
  }

}
