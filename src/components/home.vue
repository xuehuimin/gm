<template>
  <div>
    <div style="height:1.2rem"></div>
    <!-- 头部-->
    <div class="search_box">
      <header class="header_home">
        <img class="lt logo" src="../../static/img/grass_logo.png" alt="">
        <div class="lt search">
          <div class="search_input clear">
            <img class="search_btn" src="../../static/img/search_icon.png" alt="">
            <input  type="text" placeholder="低至9.9">
          </div>
        </div>
        <div class="rt user_bar">
          <router-link to="/cart" class="cart">
            <img src="../../static/img/grass_cart.png" alt="">
          </router-link>
          <router-link style="color:#333" to="/login">
              {{username}}
          </router-link>
        </div>
      </header>
    </div>
    <!-- 轮播图  -->
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../static/img/banner1.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner2.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner3.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner4.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner5.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner6.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner7.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../../static/img/banner8.jpg"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 快捷入口-->
    <div class="enter_wrap">
      <ul class="clear">
        <li><a href=""><img src="../../static/img/fenlei.png"/><p class="title">分类</p></a></li>
        <li><a href=""><img src="../../static/img/chongzhi.png"/><p class="title">充值中心</p></a></li>
        <li><a href=""><img src="../../static/img/phone.png"/><p class="title">手机电脑</p></a></li>
        <li><a href=""><img src="../../static/img/lingquan.png"/><p class="title">领券中心</p></a></li>
        <li><a href=""><img src="../../static/img/dianqi.png"/><p class="title">电器商城</p></a></li>
        <li><a href=""><img src="../../static/img/jngrong.png"/><p class="title">金融理财</p></a></li>
        <li><a href=""><img src="../../static/img/chaoshi.png"/><p class="title">国美超市</p></a></li>
        <li><a href=""><img src="../../static/img/jiaju.png"/><p class="title">家居家装</p></a></li>
        <li><a href=""><img src="../../static/img/guanjia.png"/><p class="title">国美管家</p></a></li>
        <li><a href=""><img src="../../static/img/my.png"/></a><p class="title">我的</p></li>
      </ul>
    </div>
    <!-- 主题街 -->
    <div class="theme_wrap">
      <img src="../../static/img/zhutijie.png" alt="">
    </div>
    <!-- 头条活动-->
    <div class="headeTitle">
      <div class="lt caption">
        <img src="../../static/img/toutiao.png" alt="">
      </div>
      <div class="rt headeCont">
        <div class="headScroll"><Swiper></Swiper></div>
      </div>
    </div>
    <!-- 抢购-->
    <div class="rush_buy">
      <div class="rush_title">
        <h3>抢购</h3>
        <div class="timer"><Timer></Timer></div>
        <a href="" class="safe_tips">
          <span>秒抢好货</span><i class="mint-toast-icon mintui mintui-back"></i>
        </a>
      </div>
      <div class="rush_buy_slider">
        <ul>
          <li v-for="item in rushArr">
            <a href="">
              <div class="goods_info"><img :src="item.img" alt=""></div>
              <span class="price">{{item.price}}</span>
              <p class="inventory">{{item.inventory}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--掌上专享、海外购、国美精选、团购-->
    <div class="activity_module">
      <div class="module_left">
        <h4 class="main_tit">掌上专享</h4>
        <p class="sub_tit">美的(Midea) MG80-1431WDXG 8公斤 滚筒 1400转 WIFI控制 变频 金</p>
        <strong class="sub_price">￥1899</strong>
        <div class="img_box">
          <img src="../../static/img/mxiyiji.jpg" alt="">
        </div>
      </div>
      <div class="module_right">
        <div class="right_top clear">
          <div class="info lt">
            <h4 class="main_tit" style="color:#b124cb">值得买</h4>
            <p class="sub_tit">格力（GREE）智控WIFI 大1匹 变频  舒净风冷暖  壁挂式空调 KFR-26GW/NhDaB3W晧雪白</p>
            <strong class="sub_price">￥3049</strong>
          </div>
          <div class="img_box rt">
            <img src="../../static/img/mkongtiao.jpg" alt="">
          </div>
        </div> 
        <ul class="right_bottom">
          <li>
            <div class="info">
              <h4 class="main_tit" style="color:#ff5939">排行榜</h4>
              <p class="sub_tit">必买尖货</p>
            </div>
            <div class="img_box">
              <img src="../../static/img/mdianshi.jpg" alt="">
            </div>
          </li>
          <li>
            <div class="info">
              <h4 class="main_tit" style="color:#04a758">团购</h4>
              <p class="sub_tit">团购更便宜</p>
            </div>
            <div class="img_box">
              <img src="../../static/img/mfengshan.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>      
    </div>
    <!-- 主题街 -->
    <div class="module_main">
      <a href="">
        <img src="../../static/img/zhuti1.jpg" alt="">
      </a>
      <ul class="main_box">
        <li><a href=""><img src="../../static/img/zhuti2.jpg" alt=""></a></li>
        <li><a href=""><img src="../../static/img/zhuti5.jpg" alt=""></a></li>
        <li><a href=""><img src="../../static/img/zhuti3.jpg" alt=""></a></li>
        <li><a href=""><img src="../../static/img/zhuti4.jpg" alt=""></a></li>
      </ul>
       <a href="">
        <img src="../../static/img/zhuti6.jpg" alt="">
      </a>
    </div>
    <!-- 国美精选 -->
    <div class="module">
      <div class="module_title title1">
        <a href="" class="safe_tips">
         <span>单单抽奖</span><i class="mint-toast-icon mintui mintui-back"></i>
        </a>
      </div>
      <div class="module_cont">
        <ul class="clear">
          <li v-for="item in moduleArr"><a href=""><img :src="item" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!-- 主题街 -->
    <div class="theme">
      <div class="module_title title2"></div>
      <div class="module_cont">
        <ul class="clear">
          <li v-for="item in themeArr"><a href=""><img :src="item" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!-- 优质家电 -->
    <div class="family">
       <div class="module_title title3"></div>
      <div class="module_cont public">
        <ul class="clear">
          <li class="big" style="margin-right:.03rem"><a href=""><img src="../../static/img/family2.jpg" alt=""></a></li>
          <li class="big"><a href=""><img src="../../static/img/family3.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/family4.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/family1.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/family5.jpg" alt=""></a></li>
          <li class="small" style="margin-right:0"><a href=""><img src="../../static/img/family1.jpg" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!-- 品质生活 -->
    <div class="life">
      <div class="module_title title4"></div>
      <div class="module_cont public">
        <ul class="clear">
          <li class="big" style="margin-right:.03rem"><a href=""><img src="../../static/img/life1.jpg" alt=""></a></li>
          <li class="big"><a href=""><img src="../../static/img/life2.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life3.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life4.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life5.jpg" alt=""></a></li>
          <li class="small" style="margin-right:0"><a href=""><img src="../../static/img/life7.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life6.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life8.jpg" alt=""></a></li>
          <li class="small"><a href=""><img src="../../static/img/life9.jpg" alt=""></a></li>
          <li class="small" style="margin-right:0"><a href=""><img src="../../static/img/life10.jpg" alt=""></a></li>
        </ul>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
      <div class="module_title5"></div>
      <div class="module_cont"></div>
    </div>
    <Ajax></Ajax>
    <!-- 底部 -->
    <fcFooter></fcFooter>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import '../css/home.css'
import Timer from "./timer"
import Swiper from "./swiper"
import fcFooter from './footer'
import Ajax from './ajax'
export default {
  components: {Timer,Swiper,fcFooter,Ajax},
  computed: {},
  data(){
    return{
      // 抢购
      rushArr:[
        {img:"../../static/img/rush1.jpg",price:"￥49.9",inventory:"仅剩:50件"},
        {img:"../../static/img/rush2.jpg",price:"￥9.9",inventory:"仅剩:50件"},
        {img:"../../static/img/rush3.jpg",price:"￥19.9",inventory:"仅剩:50件"},
        {img:"../../static/img/rush4.jpg",price:"￥29.9",inventory:"仅剩:50件"},
        {img:"../../static/img/rush5.jpg",price:"￥30.8",inventory:"仅剩:50件"},
        {img:"../../static/img/rush6.jpg",price:"￥25.6",inventory:"仅剩:50件"},
        {img:"../../static/img/rush7.jpg",price:"￥28.8",inventory:"仅剩:40件"},
        {img:"../../static/img/rush8.jpg",price:"￥14.5",inventory:"仅剩:80件"},
        {img:"../../static/img/rush9.jpg",price:"￥23.7",inventory:"仅剩:50件"},
        {img:"../../static/img/rush10.jpg",price:"￥56.4",inventory:"仅剩:50件"},
        {img:"../../static/img/rush11.jpg",price:"￥45.7",inventory:"仅剩:50件"},
        {img:"../../static/img/rush12.jpg",price:"￥78.9",inventory:"仅剩:20件"},
        {img:"../../static/img/rush13.jpg",price:"￥67.8",inventory:"仅剩:10件"},
        {img:"../../static/img/rush14.jpg",price:"￥87.6",inventory:"仅剩:5件"},
        {img:"../../static/img/rush16.jpg",price:"￥56.9",inventory:"仅剩:50件"},
      ],
      // 国美精选
      moduleArr:[
          "../../static/img/module1.jpg",
          "../../static/img/module2.jpg",
          "../../static/img/module3.jpg",
          "../../static/img/module5.jpg",
          "../../static/img/module4.jpg",
          "../../static/img/module6.jpg",
      ],
      // 主题街
      themeArr:[
          "../../static/img/theme1.jpg",
          "../../static/img/theme2.jpg",
          "../../static/img/theme3.jpg",
          "../../static/img/theme5.jpg",
          "../../static/img/theme4.jpg",
          "../../static/img/theme6.jpg",
      ],
      username:""
      // login:""
    }
  },
  mounted(){
    document.body.style.background="#f8f8f8";
     console.log(this.$route.params);
    if(this.$route.params.username){
      this.username=this.$route.params.username
    }else{
      this.username="登录"
    }
  },  
  methods:{
   
 }
    
}
</script>

<style>
a{
  color: #333333;
}

</style>
