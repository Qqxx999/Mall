<!--  -->
<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in cartList" 
    :key="index"
    :product="item"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'

export default {
  data () {
    return {
    };
  },

  components: {
    CartListItem
  },

  computed: {
    ...mapGetters(['cartList'])
  },


  methods: {}
}

</script>
<style  scoped>
</style>