<template>
  <div>
    <mu-appbar class="head" :zDepth="0">
      <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
    </mu-appbar>  
    <!-- 用户登录 -->
    <div class="login_wrap">
      <a class="login_logo">
          <img src="../../static/img/logo_xh.png" alt="">
      </a>
      <p class="title">账号密码登录</p>
      <div class="login">
        <div class="user">
          <span class="icon"></span>
          <input id="username" type="text" name="username" autocomplete="off" v-model="username" placeholder="手机号/邮箱/用户名/门店会员卡号">
        </div>
        <div class="pwd">
          <span class="icon"></span>
          <input id="password" type="password" name="password" autocomplete="off" v-model="password" placeholder="请输入密码">
        </div>
      </div>
      
      <div class="login_lg">
        <span class="quick_lg">
          <router-link to='/reg'>快速注册</router-link>
        </span>
        <div class="find_btn">
            <router-link to=''>找回密码</router-link>
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="login_btn" @click="login">
        <span>登录</span>
      </div>
      <!-- 其他登录方式 -->
      <div class="other">
        <span>使用以下账户登录</span>
      </div>
      <div class="other_login">
        <router-link to=""><img src="../../static/img/mdhy.png"/><span>门店会员</span></router-link>
        <router-link to="http://web2.qq.com/"><img src="../../static/img/QQ.png"/><span>QQ</span></router-link>
        <router-link to="https://weibo.com/"><img src="../../static/img/weibo.png"/><span>新浪微博</span></router-link>
        <router-link to="https://auth.alipay.com/login/index.htm"><img src="../../static/img/zfb.png"/><span>支付宝 </span></router-link> 
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    mounted(){
        document.body.style.background="#fff"
    },
    data(){
      return{
        username:"",
        password:""
      }
    },
    methods:{
        back(){
            window.location.href='/'
        },
        login(){
            Axios({
                url:"/Handler/AdminRegHandler?action=login",
                method:"post",
                data:{
                    userName:this.username,
                    password:this.password
                }
            }).then(res=>{
                if(res.data.success=="登录成功"){
                    alert(res.data.success)
                    this.$router.push({name:"home",params:{username:this.username}})
                }else{
                    alert("用户或密码错误")
                    this.username="",
                    this.password=""
                }
            })
        }
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
.login_wrap{
    width: 5rem;
    height: 100%;
    margin: 0 auto;
    background-color: #ffffff;
}
.login_logo{
    width: 2.75rem;
    height: .9rem;
    display: block;
    margin: 0 auto .35rem;
}
.login_logo img{
    display: block;
    width: 100%;
}
.title{
    width: 2.24rem;
    margin-bottom: .5rem;
    color: #f20c59;
    font-size: .12rem;
    text-align: center;
    border-bottom: 2px solid #f20c59;
    padding: .2rem;
    margin: 0 auto;
}
.user,.pwd{
    border-bottom: 1px solid #ddd;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center; 
    align-items: center;
    box-sizing: border-box;
    padding: .2rem 0;
}
.user .icon,.pwd .icon{
    display: block;
    width: .44rem;
    height: .44rem;
    overflow: hidden;
    margin-right: .1rem;
    background-size: contain;
}
.user .icon{
    background-image: url(../../static/img/icon_phone.png);
}
.pwd .icon{
    background-image: url(../../static/img/icon_pwd.png)
}
input{
    display: block;
    width: 100%;
    border: none;
    background: none;
    outline: none;
    -webkit-appearance:none;
    color: #333333;
}
.login_lg{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-top: .25rem;
}
.quick_lg{
    font-size: .3rem;
    flex: 1;
}
.find_btn{
    font-size: .3rem;
}
.quick_lg a,.find_btn a{
    color: #78BEE9;
}
.login_btn{
    background: -webkit-linear-gradient(left,#FF94CB 0,#FF80AA 100%);
    color: #fff;
    height: 0.88rem;
    width: 98%;
    line-height: .88rem;
    margin: .6rem auto 0;
    box-sizing: border-box;
    border-radius: .55rem;
    font-size: .32rem;
    text-align: center;
}
.other{
    margin-top: 2.15rem;
    border-top: .01rem solid #ddd;
    text-align: center;
}
.other span{
    width: 2.7rem;
    height: .28rem;
    background: #ffffff;
    display: block;
    margin: 0 auto;
    font-size: .28rem;
    color: #999;
    position: relative;
    top: -.17rem;
    padding: 0 .2rem
}
.other_login{
    width: 100%;
    color: #666;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: .5rem 0;
    text-align: center;
    font-size: .26rem;
}
.other_login a{
    flex: 1;
    -webkit-box-flex: 1;
}
.other_login a img{
    width: .84rem;
    height: .84rem;
    margin: 0 auto .1rem;
    display: block;
}
</style>
