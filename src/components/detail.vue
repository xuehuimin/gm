<template>
  <div>
    <!-- 头部开始 -->
    <mu-appbar title="Title" class="head">
      <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
      <span class="title">详情</span>
      <mu-icon-menu icon="more_horiz" slot="right">
        <router-link to="/"><mu-menu-item title="首页"/></router-link>
        <router-link to="/classfiy"><mu-menu-item title="分类"/></router-link>
        <router-link to="/cart"><mu-menu-item title="购物车"/></router-link>
        <router-link to="/user"><mu-menu-item title="我的"/></router-link>
      </mu-icon-menu>
    </mu-appbar> 
    <!-- 内容 -->
    <div class="detail_cont">
        <div class="cont_inner">
          <div class="img_box">
            <img id="detail" :sendId="id" :src='obj.src' alt="">
          </div>
          <div class="detail_info">
            <p class="title lt">{{obj.title}}</p>
            <div class="share rt"><span>分享</span></div>
          </div>
          <p class="price">￥<strong>{{obj.price}}</strong></p>
        </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <ul>
        <li class="store"><span>店铺</span></li>
        <li class="heart"><span>收藏</span></li>
        <li class="cart"><span>购物车</span></li>
        <li class="joincart" id="big1" @click="joincart">加入购物车</li>
        <li class="gobuy" id="big2" @click="getItem">立即购买</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
      return{
        id:"",
        data:[
          
        ],
        obj:{
          src:"",
          title:"",
          price:"",
          num:"",
          id:this.id
        }
      }
    },
    methods:{
      back(){
        window.location.href='/'
      },
      detail(id){         
          Axios.get("https://easy-mock.com/mock/5ae85d8961d6467bd702a0b3/xhm/1")
             .then(res=>{
            this.data=this.data.concat(res.data.data.list)
          })
          Axios.get("https://easy-mock.com/mock/5ae85d8961d6467bd702a0b3/xhm/2")
             .then(res=>{
            this.data= this.data.concat(res.data.data.list);
            console.log(this.data)
            for(var i=0;i<this.data.length;i++){
            if(this.data[i].id==id){
              this.obj.src=this.data[i].src,
              this.obj.title=this.data[i].title,
              this.obj.price=this.data[i].price,
              this.obj.num=this.data[i].num
            }
          }
          console.log(this.obj)
          })  
      },
      joincart(val){
      console.log(this.data)
        sessionStorage.setItem(this.id,JSON.stringify(this.obj))
      },
      getItem(){
       var goods=JSON.parse(sessionStorage.getItem());
       console.log(goods)
      }

    },
    mounted(){
      document.body.style.background="#fff";
      
      this.detail(this.$route.params.id);
      this.id=this.$route.params.id;
    }

}
</script>

<style scoped>
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
/* 内容 */
.detail_cont{
  overflow: hidden;
}
.detail_cont .cont_inner{
  width: 100%;
  overflow: hidden;
  padding: 0 .3rem;
}
.img_box{
  width: 5rem;
  height: 5rem;
  margin: .1rem auto;
}
.detail_info{
  margin-top: .2rem;
  height: .8rem;
  text-align: center;
}
.detail_info .title{
  width: 85%;
  height: .8rem;
  padding-right: .3rem;
  font-size: .28rem;
  border-right: .03rem solid #f8f8f8; 
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  overflow: hidden;
}
.detail_info .share{
  width: 15%;
  height: .8rem;
  background: url(../../static/img/ic_share.png) no-repeat center top;
  background-size: .4rem .4rem;
}
.detail_info .share>span{
  display: block;
  margin-top: .5rem;
}
.price{
  height: 1rem;
  line-height: 1rem;
  font-size: .4rem;
  color: #F20C59;
}
.price strong{
  font-size: .5rem;
}
/* 底部 */
.footer{
  position: fixed;
  bottom: 0;
  height: 1rem;
  border: .02rem solid #F2F2F2;
}
.footer>ul{
  /* margin-top: .09rem; */
  overflow: hidden;
  text-align: center;
}
.footer>ul>li{
  width: 1rem;
  height: 1rem;
  float: left;
  padding: .3rem 0;
}
.footer>ul>li.store{
  background: url(../../static/img/xq_tab_store.png) no-repeat center top;
  background-size: .6rem .6rem;
}
.footer>ul>li.heart{
  background: url(../../static/img/xq_tab_shoucang_normal.png) no-repeat center top;
  background-size: .6rem .6rem;
}
.footer>ul>li.cart{
  background: url(../../static/img/xq_tab_shopcart.png) no-repeat center top;
  background-size: .6rem .6rem;
}
.footer>ul>li>span{
  display: block;
  margin-top: .3rem;
}
#big1,#big2{
  width: 1.68rem;
  color: #ffffff;
}
.joincart{
  height: 1rem;
  background: linear-gradient(to right,#FAC905 0,#FF9500 100%);
}
.gobuy{
  height: 1rem;
  background: linear-gradient(to right,#FA1E8C 0,#FC1E56 100%);
}
</style>
