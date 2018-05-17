<template>
  <div>
    <div class="common_footer">
      <div class="user_bar">
        <ul class="clear">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/reg">注册</router-link></li>
          <li><router-link to="">更多</router-link></li>
          <li><router-link to="">反馈</router-link></li>
        </ul>
      </div>
      <div class="foot_mes">
        <div class="copyright">
          <p>copyright ©  2000-2018 gome.com.cn</p>
          <p>客服热线：<a href="">4008-708-708</a></p>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul style="background-image:url('../../static/img/footer_bg.png')">
        <li><router-link to="/"><img src="../../static/img/foot_home.png" alt=""><p class="tit" style="color:#ff0027">首页</p></router-link></li>
        <li><router-link to="/classfiy"><img src="../../static/img/foot_fenlei.png" alt=""><p class="tit">分类</p></router-link></li>
        <li><router-link to="/cart"><img src="../../static/img/foot_cart.png" alt=""><p class="tit">购物车</p></router-link></li>
        <li><router-link to="/login"><img src="../../static/img/foot_my.png" alt=""><p class="tit">我的</p></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.common_footer{
  height: 4rem;
  background: white;
}
.user_bar{
    padding: .3rem 0 .5rem 0;
    height: .05rem;
    border-bottom: .02rem solid #ddd;
    border-top: .02px solid #e6e6e6;
    overflow: hidden;
}
.user_bar>ul{
  display: flex;
}
.user_bar>ul>li{
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    flex: 1;
    color: #888;
    font-size: .23rem;
    text-align: center;
    white-space: nowrap;
    border-right: .01rem solid #888888;
}
.user_bar>ul>li:last-child{
  border-right: none;
}
.foot_mes{
  width: 100%;
  text-align: center;
  margin: auto;
}
.foot_mes .copyright{
  padding: .5rem 0;
}
.foot_mes .copyright p{
   line-height: .5rem;
    text-align: center;
    color: #888;
    font-size: .23rem;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    z-index: 10;
    border-top: .05rem solid #e4e4e4;
}
.footer>ul{
  display: flex;
  align-items: center;
  height: 1.1rem;
}
.footer>ul>li{
  font-size: .16rem;
  flex: 1;
  text-align: center;
}
.footer>ul>li img{
    width: .5rem;
    height: .5rem;
    margin: .08rem auto;
}
a{
  color: #888888
}
</style>
