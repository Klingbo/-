// (function() {
//   window.onload = function() {
//     var btn = document.querySelector('.icon-sousuo');       
//     btn.addEventListener('click', function(e) {
//       console.log('click');
//     });
//     btn.addEventListener('mousedown', function(e) {
//       console.log('mousedown');
//     });
//     btn.addEventListener('mouseup', function(e) {
//       console.log('mouseup');
//     });
//     btn.addEventListener('touchstart', function(e) {
//       console.log('touchstart');
//     });
//     btn.addEventListener('touchend', function(e) {
//       console.log('touchend');
//     });
//     btn.addEventListener('touchmove', function(e) {
//       console.log('touchmove');
//     });
//   }
// })();

// $(function() {
//   $('.icon-sousuo').on('tap singleTap doubleTap longTap', function(e) {
//     console.log(e.type);
//   });
//   $('.icon-sousuo').on('swipe swipeUp swipeDown swipeLeft swipeRight', function(e) {
//     console.log(e.type);
//   });
// });

$(function() {
  $('.icon-sousuo').on('tap', function(e) {
    // 第一步，获取搜索框的值
    var $txt = $('.search-box').val() || 'BOBO';
    // 第二步，页面跳转到搜索结果页
    window.location.href = 'src.html?kw=' + $txt;
  });

  // 初始化轮播图
  initSwiper();

  // 设置倒计时
  var date = Date.now()+ (3 * 60 * 60 *1000);
  // 可以把页面上所有的时钟函数方法一个数组中，然后统一放在setInterval中运行
  date = new Date(date);
  function daojishi() {
    var timeEach = setTimmer(date);
    $('.timer .timer-num').each(function(index, item) {
      $(item).text(timeEach[index]);
    });
    };
  daojishi();
  setInterval(function(){
    daojishi();
  }, 200)

});

function initSwiper() {      
  var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    autoplay: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  });
}


