<!--  -->
<template>
  <div class="tab-menu">
    <div class="menu"
    v-for="(item, index) in categories" :key="index"
     :class="{active: index == currentIndex}" @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    };
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},

  computed: {},

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
}

</script>
<style  scoped>
.tab-menu {
  background: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.menu {
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  text-align: center;
}
.active {
  font-weight: 500;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 2px solid var(--color-high-text);;
}
</style>