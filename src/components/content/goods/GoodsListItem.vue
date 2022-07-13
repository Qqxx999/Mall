<!--  -->
<template>
  
    <div class="goods-list-item" @click="deClick">
      <img :src="showImage" alt="" @load="imageLoad">
      <div class="item">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },

  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    },
    deClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}

</script>
<style  scoped>
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .item {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 14px;
    
  }
  .item p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .item .price {
    margin-right: 20px;
    color: var(--color-high-text);
  }
  .item .collect {
    position: relative;
  }
  .item .collect::after {
    content: '';
    position: absolute;
    left: -15px;
    width: 15px;
    height: 15px;
    background-image: url("~assets/img/collect/collect.svg");
    background-size: 15px 15px;
  }
</style>