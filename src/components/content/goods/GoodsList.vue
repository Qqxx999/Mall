<!--  -->
<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" 
    :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  props: {
    goods: {
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
    GoodsListItem
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
</style>