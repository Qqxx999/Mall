<!--  -->
<template>
  <div>
    <swiper class="swiper-item">
      <swiper-item v-for="item in topMages" class="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
  props: {
    topMages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {
    Swiper,
    SwiperItem
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped>
.swiper-item {
  width: 100%;
  height: 300px;
}
</style>