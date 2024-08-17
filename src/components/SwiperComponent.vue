<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    loop
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :speed="1000"
    class="swiper"
  >
    <swiper-slide>
      <img src="https://hijja.sistemtoko.com/img/user/hijja/media/nVHxmb_slide1.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://hijja.sistemtoko.com/img/user/hijja/media/mGMfXL_slide2.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://hijja.sistemtoko.com/img/user/hijja/media/F3na1Q_slide3.jpg" alt="" />
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y]
    }
  }
}
</script>

<style>
.swiper,
.swiper img {
  height: 80vh;
  width: 100%;
}
</style>
