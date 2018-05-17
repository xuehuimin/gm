<template>
  <div>
    <!-- 下拉加载开始 -->
    <div class="like_cont">
      <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">  
        <ul class="like_ul" >  
          <li v-for="(val, key) in data">  
            <img :src="val.src" alt="" @click="sendId" :sendId="val.id">
            <p class="title">{{val.title}}</p>
            <div class="info">
              <p class="price">￥<strong>{{val.price}}</strong></p>
              <img class="btn" :src="val.btn" alt="">
            </div>
          </li>  
        </ul>  
    </mt-loadmore>
    <div v-if="this.num==2?true:false" class="nomore">
        没有更多了
    </div>
    </div>  
  </div>
</template>

<script>
import Vue from "vue"
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name , Loadmore);
import Axios from "axios"

  export default {
    data(){
      return{
          data:[],
          num:0,
          allLoaded: false,
      }
    },
    methods:{
      Loadmore(){
        this.num++;           
          Axios.get("https://easy-mock.com/mock/5ae85d8961d6467bd702a0b3/xhm/"+this.num)
             .then(res=>{
            this.data= this.data.concat(res.data.data.list);
            console.log(this.data)
          })
      },
      loadTop(){
        this.Loadmore();
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
        this.Loadmore();
        this.$refs.loadmore.onTopLoaded();
      },
      // 详情页跳转
      sendId(val){
        this.id=val.path[0].attributes.sendid.value
         console.log(val.path[0].attributes.sendid.value)
        this.$router.push({name:"detail",params:{id:this.id}})
      }
    },
    mounted(){
      this.Loadmore();
    }

 }
</script>

<style scoped>
.like_cont{
  overflow: hidden;
}
.like_ul{
  overflow: hidden;
}
.like_ul>li{
  float: left;
  width: 49.22%;
  background-color: #ffffff;
  padding: .2rem;
  box-sizing: border-box;
  margin-bottom: .1rem;
}
.like_ul>li:nth-child(2n-1){
  margin-right: .1rem; 
}
.like_ul>li .title{
  height: .7rem;
  overflow: hidden;
  margin-top: .3rem;
}
.like_ul>li .info{
  height: .7rem;
  line-height: .7rem;
}
.like_ul>li .price{
  color: #F40C7E;
  float: left;
  margin-left: .2rem;
}
.like_ul>li .price strong{
  font-size: .25rem;
}
.btn{
  width: .45rem;
  height: .45rem;
  float: right;
  margin-top: .1rem;
}

/* nomore */
.nomore{
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  font-size: .28rem;
}
</style>
