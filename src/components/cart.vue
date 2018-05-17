<template>
  <div>
    <!-- 头部开始 -->
    <mu-appbar title="Title" class="head">
      <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
      <span class="title">购物车</span>
      <mu-icon-menu icon="more_horiz" slot="right">
        <router-link to="/"><mu-menu-item title="首页"/></router-link>
        <router-link to="/classfiy"><mu-menu-item title="分类"/></router-link>
        <router-link to="/cart"><mu-menu-item title="购物车"/></router-link>
        <router-link to="/user"><mu-menu-item title="我的"/></router-link>
      </mu-icon-menu>
    </mu-appbar>  

    <!-- 购物车为空 -->
    <div class="shopping_cart">
      <div class="gologin"><router-link to="/login"><p>去登录</p></router-link></div>
      <div class="null">
        <div class="pic_bar">
          <img src="../../static/img/bj_baobei.png" alt="">
          <p class="desc">购物车空空~买点啥</p>
        </div>
        <div class="plc_btn">
          <router-link to="/"><span class="pink">先逛逛</span></router-link>
        </div>
      </div>
    </div>
    <!-- 为你推荐 -->
    <div class="title_box">
      <p class="line"></p>
      <h2>
        <i class="icon"></i>为你推荐
      </h2>
      <p class="line"></p>
    </div>
    <Ajax></Ajax>
  </div>
</template>

<script>
import Ajax from '../components/ajax'
export default {
  components:{Ajax},
  methods:{
    back(){
      window.location.href='/'
    }
  },
  mounted(){
    document.body.style.background="#f8f8f8"
  },
}
</script>

<style scoped>
/* 头部 */
.head{
    background: #ffffff;
    text-align: center;
    font-size: .25rem;
    color: #333333;
    height: 50px;
  }
.title,.back{
    font-size: .32rem;
}
/* 购物车为空 */
.shopping_cart{
  min-height:7rem;
  margin: 0 auto;
}
.gologin{
  width: 100%;
  height:.7rem;
  background: #ffffff;
  font-size: .30rem;
  padding-top: .02rem;
}
.gologin>a{
  color: #999;  
}
.gologin>a>p{
  width: 1.7rem;
  height: .5rem;
  border: 1px solid #999999;
  line-height: .5rem;
  border-radius: .3rem;
  text-align: center;
  margin: .1rem auto;
}
.shopping_cart .null{
    text-align: center;
}
.shopping_cart .null .pic_bar{
   width: 5rem;
   height: 5rem;
   margin: 0 auto;
}
.null .pic_bar .desc{
    font-size: .3rem;
    color: #999;
    text-align: center;
    box-sizing: border-box;
    margin-top: .5rem;
    margin-bottom: 1rem;
}
.null  .plc_btn{
    display: inline-block;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    margin-top: 1.5rem;
}
.null  .plc_btn>a>span{
    min-width: .4rem;
    padding: 0 .6rem;
    font-size: .3rem;
    border-radius: 3.1rem;
    height: .8rem;
    margin: 0 .2rem;
    display: inline-block;
    line-height: .8rem;
    vertical-align: middle;
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
}
.null  .plc_btn>a>span{
    color: #ffffff;
    background-image: -webkit-linear-gradient(0deg,#FA1E8C 0,#FC1E56 100%);
}
/* 为你推荐 */
.title_box{
  padding: 2rem 0 .5rem;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -webkit-justify-content: center;
}
.title_box h2{
    padding: 0 .3rem;
    font-size: .36rem;
    color: #F20C59;
}
.title_box h2 .icon{
    display: inline-block;
    width: .6rem;
    height: .6rem;
    background: url(../../static/img/icon_tuijian.png) no-repeat;
    background-size: 100% 100%;
    margin-right: .1rem;
    margin-bottom: -.15rem;
}
.line{
  width: 1rem;
  height: .03rem;
  background: -webkit-linear-gradient(left,#FF0027,#D900B4,#F0F);
}


</style>
