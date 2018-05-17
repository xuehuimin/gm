(function(doc,win){
  var docEl=doc.documentElement;
  var resize='orientationchange' in window?'orientationchange':'resize'
  var recal=function(){
    var clientwidth=docEl.clientWidth
    if(!clientwidth) return;
    docEl.style.fontSize=100*(clientwidth/640)+ "px"
  }
  recal()
  if(!doc.addEventListener) return;
  //console.log(win);
  // 兼容移动端  
  win.addEventListener(resize,recal,false)
  //DOMConentLoaded  浏览器内部加载执行
  doc.addEventListener('DOMContentLoaded',recal,false)
  
})(document,window)