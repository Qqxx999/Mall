<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="baClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in titles" 
        :class="{active: index == currentIndex}"
        class="item"
        @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data () {
    return {
      currentIndex: 0,
      titles: ['商品','参数','评论','推荐']
    };
  },

  components: {
    NavBar
  },

  computed: {},

  methods: {
    itemClick(index) {
      this.currentIndex = index,
      this.$emit('titClick', index)
    },
    baClick() {
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
.left img{
  margin-top: 12px;
}
.center {
  display: flex;
}
.item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}

</style>