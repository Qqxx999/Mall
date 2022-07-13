<!--  -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div v-if="goods.columns" class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
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

  computed: {},

 
}

</script>
<style  scoped>
.base-info {
  margin: 10px;
}
.info-title {
  margin: 5px;
  font-size: 17px;
}
.info-price {
  margin-bottom: 10px;
}
.info-price .n-price {
  position: relative;
  left: 5px;
  margin-right: 10px;
  font-size: 20px;
  color: var(--color-high-text);
}
.info-price .o-price {
  margin-right: 10px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 16px;
  color: var(--color-high-text);
}
.info-other {
  position: relative;
  left: -5px;
  margin-bottom: 10px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgba(100, 100, 100, .1);
}
.info-service {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  border-bottom: 5px solid rgba(100, 100, 100, .1);
}
.info-service-item img{
  width: 14px;
  height: 14px;
}
</style>