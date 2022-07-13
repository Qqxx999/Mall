<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
    :key="index" 
    class="item"
    @click="itemClick(index)"
    :class="{active: index == currentIndex}">
      <span>{{item}}</span>
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
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},


  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}

</script>
<style  scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 18px;
  }
  .item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    
  }
  .item span {
    padding: 5px;
    
  } 
  .active span {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>