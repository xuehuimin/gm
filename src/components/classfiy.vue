<template>
  <div>
   <mu-appbar title="Title" class="head">
      <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
      <span class="title">分类</span>
      <mu-icon-menu icon="more_horiz" slot="right">
        <router-link to="/"><mu-menu-item title="首页"/></router-link>
        <router-link to="/classfiy"><mu-menu-item title="分类"/></router-link>
        <router-link to="/cart"><mu-menu-item title="购物车"/></router-link>
        <router-link to="/user"><mu-menu-item title="我的"/></router-link>
      </mu-icon-menu>
    </mu-appbar>  

    <div id="container">
        <div class="goods">
            <div class="tab_wrap">
                <div class="tab_tit">
                    <a class="cur" href="javascript:void(0);">
                        <p><img src="../../static/img/icon-fork@2x.png" alt=""></p>
                        食品生鲜
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-milkbox@2x.png" alt=""></p>
                        进口食品
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-glass@2x.png" alt=""></p>
                        酒水饮料
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-cleaner@2x.png" alt=""></p>
                        厨卫清洁
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-maternal@2x.png" alt=""></p>
                        母婴玩具
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-beauty@2x.png" alt=""></p>
                        美容护理
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-appliance@2x.png" alt=""></p>
                        宠物园艺
                    </a>
                    <a href="">
                        <p><img src="../../static/img/icon-furniture@2x.png" alt=""></p>
                        家居家纺
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-cloth@2x.png" alt=""></p>
                        服饰内衣
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-jewery@2x.png" alt=""></p>
                        箱包珠宝
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-sports@2x.png" alt=""></p>
                        鞋靴运动
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-mobile@2x.png" alt=""></p>
                        数码手机
                    </a>
                    <a href="">
                        <p><img src="../../static/img/icon-appliance@2x.png" alt=""></p>
                        家用电器
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-computer@2x.png" alt=""></p>
                        电脑办公
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-health@2x.png" alt=""></p>
                        医药保健
                    </a>
                    <a href="javascript:void(0);">
                        <p><img src="../../static/img/icon-book.png" alt=""></p>
                        图书杂志
                    </a>
                </div>
                <div class="tab_box">
                    <ul>
                        <li>
                            <a class="title" href="">
                                <h3>休闲零食</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>坚果炒货</span></a>
                                <a href=""><span>膨化食品</span></a>
                                <a href=""><span>果干蜜饯</span></a>
                                <a href=""><span>肉干肉脯</span></a>
                                <a href=""><span>红枣</span></a>
                                <a href=""><span>牛肉干</span></a>
                                <a href=""><span>鱼干</span></a>
                                <a href=""><span>海苔</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>饼干/糕点</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>月饼</span></a>
                                <a href=""><span>西式糕点</span></a>
                                <a href=""><span>饼干</span></a>
                                <a href=""><span>传统糕点</span></a>
                                <a href=""><span>威化</span></a>
                                <a href=""><span>曲奇</span></a>
                                <a href=""><span>苏打饼干</span></a>
                                <a href=""><span>派</span></a>
                                <a href=""><span>蛋糕</span></a>
                                <a href=""><span>沙琪玛</span></a>
                                <a href=""><span>蛋卷</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>糖果/巧克力</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>巧克力</span></a>
                                <a href=""><span>布丁/果冻</span></a>
                                <a href=""><span>喜糖</span></a>
                                <a href=""><span>口香糖</span></a>
                                <a href=""><span>棒棒糖</span></a>
                                <a href=""><span>硬糖</span></a>
                                <a href=""><span>牛轧糖</span></a>
                                <a href=""><span>奶糖</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>米面粮油</h3>
                                <span class="fa fa-arrow-circle-o-right arrow"></span>
                            </a>
                            <div class="box clear">
                                <a href=""><span>粉丝</span></a>
                                <a href=""><span>挂面</span></a>
                                <a href=""><span>面粉</span></a>
                                <a href=""><span>大米</span></a>
                                <a href=""><span>食用油</span></a>
                                <a href=""><span>杂粮</span></a>
                                <a href=""><span>橄榄油</span></a>
                                <a href=""><span>泰国香米</span></a>
                                <a href=""><span>花生油</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>南北干货</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>菌菇</span></a>
                                <a href=""><span>莲子/枣子</span></a>
                                <a href=""><span>枸杞</span></a>
                                <a href=""><span>黑木耳</span></a>
                                <a href=""><span>桂圆</span></a>
                                <a href=""><span>海产干货</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>调味速食</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>酱油</span></a>
                                <a href=""><span>酱菜</span></a>
                                <a href=""><span>调味油</span></a>
                                <a href=""><span>腊味调制</span></a>
                                <a href=""><span>糖</span></a>
                                <a href=""><span>调味酱</span></a>
                                <a href=""><span>盐</span></a>
                                <a href=""><span>火腿肠</span></a>
                                <a href=""><span>罐头</span></a>
                                <a href=""><span>年糕</span></a>
                                <a href=""><span>料酒/黄酒</span></a>
                                <a href=""><span>方便面/粉</span></a>
                            </div>
                        </li>
                        <li>
                            <a class="title" href="">
                                <h3>生鲜食品</h3>
                            </a>
                            <div class="box clear">
                                <a href=""><span>生鲜票卷</span></a>
                                <a href=""><span>低温乳品</span></a>
                                <a href=""><span>禽肉蛋类</span></a>
                                <a href=""><span>牛肉</span></a>
                                <a href=""><span>羊肉</span></a>
                                <a href=""><span>冷冻食品</span></a>
                                <a href=""><span>海鲜</span></a>
                                <a href=""><span>冰淇淋</span></a>
                                <a href=""><span>水果蔬菜</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '../css/classfiy.css'
export default {
  methods:{
    back(){
      window.location.href='/'
    }
  }
}
</script>

<style>
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
</style>
