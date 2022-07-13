<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
  .recommend {
    display: flex;
    text-align: center;
    border-bottom: 5px solid #eee;
  }
  .item {
    flex: 1;
    padding: 15px 0px 20px;
  }
  .item img {
    height: 70px;
    width: 70px;
    margin-bottom: 5px;
  }
</style>