<template>
  <div>
     <mu-appbar title="Title" class="head">
        <mu-icon-button class="back" @click="back" icon="keyboard_arrow_right" slot="left"/>
        <span class="title">我的国美</span>
        <mu-icon-menu icon="more_horiz" slot="right">
          <router-link to="/"><mu-menu-item title="首页"/></router-link>
          <router-link to="/classfiy"><mu-menu-item title="分类"/></router-link>
          <router-link to="/cart"><mu-menu-item title="购物车"/></router-link>
          <router-link to="/user"><mu-menu-item title="我的"/></router-link>
        </mu-icon-menu>
     </mu-appbar>  
    <div class="">
      我的国美
    </div>
  </div>
</template>

<script>
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
