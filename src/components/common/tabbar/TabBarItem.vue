<!--  -->
<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default() {
        return {}
      }
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: false
    };
  },

  components: {},

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },


  methods: {
    itemClick() {
      return this.$router.replace(this.path)
    }
  }
}

</script>
<style  scoped>
  #tab-bar-item {
    flex: 1;
    text-align: center;
  }
  #tab-bar-item img {
    height: 30px;
    width: 30px;
  }
  .active {
    color: red;
  }
</style>