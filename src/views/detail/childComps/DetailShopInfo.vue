<!--  -->
<template>
  <div class="shop">
    <div class="shophead">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>  
    </div>
    <div class="shop-middle">
      <div class="shop-item shop-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="all-count">总销量</div>
        </div>
          <div class="info-goods">
            <div class="goods-count">
              {{shop.goodsCount}}
            </div>
            <div class="all-goods">全部宝贝</div>
          </div>
      </div>
      <div class="shop-item shop-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <div class="name"><td>{{item.name}}</td></div>  
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
     </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
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
  filters: {
    sellCountFilter(value) {
      if (value < 10000) {
        return value
      }else {
        return (value/10000).toFixed(1) + '万'
      }
    }
  },
  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
.shop {
  margin: 5px;
}
.shophead img{
  width: 80px;
  height: 80px;
}
.shophead span {
  margin-left: 15px;
  position: relative;
  top: -30px;
  font-size: 17px;
}
.shop-middle {
  margin: 10px;
  display: flex;
  align-items: center;
}
.shop-item {
  flex: 1;
}
.shop-left {
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-right: 3px solid rgba(0, 0, 0, .1);
}
.sells-count {
  font-size: 18px;
  margin-bottom: 5px;
}
.all-count {
  font-size: 18px;
}
.goods-count {
  font-size: 18px;
  margin-bottom: 5px;
}
.all-goods {
  font-size: 18px;
}
.shop-right {
  margin-left: 10px;
}
.name {
  font-size: 16px;
  margin-right: 5px;
}
.score-better,.better-more{
  color: var(--color-high-text);
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 18px;
  width: 150px;
  height: 30px;
  background-color: #f2f5f8;
  text-align: center;
  line-height: 30px;
}
</style>