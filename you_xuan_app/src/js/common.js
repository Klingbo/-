/*
*获取url地址参数的方法：
*@param {string} key:参数名
*@return {string} 匹配结果
*/

function getUrlParam(key) {
  var reg = new RegExp(key + '=([^&]*)');
  var result = location.href.match(reg);
  return result ? result[1] : null;
}

/**
 * 
 * @param {Date} eventdate :活动开始时间
 * @returns {[]} :倒计时的时分秒
 */
function setTimmer(eventdate) {
  var time;
  var now = new Date();
  var timeLeft = eventdate - now;
  if(timeLeft <= 0) {
    return
  };
  var hours = parseInt(timeLeft / (1000 * 60 * 60));
  var minutes = parseInt(timeLeft / (1000 * 60)) % 60;
  var seconds = parseInt(timeLeft / 1000) % 60;
  hours = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);
  time = (hours + minutes +seconds).split("");
  return time;
}
