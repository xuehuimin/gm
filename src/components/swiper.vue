<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><a href=""><span class="tag">国美童装</span>开业盛典,满199减100</a></swiper-slide>
      <swiper-slide><a href=""><span class="tag">甜点热销榜</span>进口饼干9.8两盒</a></swiper-slide>
      <swiper-slide><a href=""><span class="tag">活期理财</span>1元起头,日日投</a></swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
      swiper,
      swiperSlide,
    },
    computed: {
     swiper() {
      return this.$refs.mySwiper.swiper
     }
    },
    data(){
        return{
          swiperOption:{
            notNextTick: true,
            autoplay: true,
            direction : 'vertical',
            loop:true,
            speed: 300,
            touchMoveStopPropagation : false
           },
        }
    }

}
</script>

<style>

</style>
