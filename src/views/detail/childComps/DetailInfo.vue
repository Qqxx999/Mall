<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
      @load="imgLoad"
      :key="item" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
        }
      }
     }
  },
  data () {
    return {
      counter: 0,
      imagesLength: 0
    };
  },

  components: {},

  computed: {},

  methods: {
    imgLoad() {
      this.counter += 1
      if (this.counter = this.imagesLength) {
        this.$emit('imageLoad');
      }
    }
  },
  watch: {
    detailInfo() {
    // 获取图片个数
    this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}

</script>
<style  scoped>
.info-desc {
  margin: 10px;
  font-size: 18px;
}
.info-key {
  margin: 10px;
  font-size: 18px;
}
.info-desc .start, .info-desc .end {
    width: 80px;
    height: 1px;
    background-color: #000;
    position: relative;
  }
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before, .info-desc .end::after {
  content: 'B';
  position: absolute;
}
.info-list img {
  width: 100%;
}
.info-desc .end::after {
    right: 0;
  }
</style>