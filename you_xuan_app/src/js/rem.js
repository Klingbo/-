(function () {
  //屏幕尺寸更改事件
  // var evt = "onorientationchange" in window ? "orientationchange" : "resize";

  var fn = function () {
    // 获取设备宽度
    var width = document.documentElement.clientWidth;    
    width = width < 320 ? 320 : width;
    width = width > 640 ? 640 : width;
    document.documentElement.style.fontSize = 100 * (width / 640) + "px";

    setTimeout(function() {
      var width = document.documentElement.clientWidth;    
      width = width < 320 ? 320 : width;
      width = width > 640 ? 640 : width;
      document.documentElement.style.fontSize = 100 * (width / 640) + "px";
    },200)
  };

  window.addEventListener('resize', fn);
  document.addEventListener("DOMContentLoaded", fn);
})();

