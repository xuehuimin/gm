<template>
  <div>
    <mu-appbar class="head" :zDepth="0">
      <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
    </mu-appbar>  
    <!-- 用户注册 -->
    <div class="login_wrap">
      <a class="login_logo">
          <img src="../../static/img/logo_xh.png" alt="">
      </a>
      <p class="title">账号密码注册</p>
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
      <!-- 注册按钮 -->
      <div class="login_btn" @click="reg">
          <span>注册</span>
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
        window.location.href='/login'
      },
      reg(){
        Axios({
          url:"/Handler/AdminRegHandler?action=add",
          method:"post",
          data:{
            userName:this.username,
            password:this.password
          }
        }).then(res=>{
            console.log(res)
            if(res.data.success=="添加成功"){
                alert("注册成功")
                this.$router.push("login")
            }else{
                alert("用户已存在")
                this.username="",
                this.password=""
            }
        })

      }
    }

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

.login_wrap{
    width: 5rem;
    height: 100%;
    margin: 0 auto;
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
    width: 
}
</style>
