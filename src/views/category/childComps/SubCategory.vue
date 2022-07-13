<!--  -->
<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="categoryData">
    <div v-for="(item, index) in categoryData" :key="index" class="item">
     <a>
       <img class="item-img" :src="item.image" alt="">
       <div class="item-text">{{item.title}}</div>
     </a>
    </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/girdview/GridView'
export default {
  data () {
    return {
    };
  },
  props: {
    categoryData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GridView
  },

  computed: {},


  methods: {}
}

</script>
<style  scoped>
.panel img {
    width: 100%;
  }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>