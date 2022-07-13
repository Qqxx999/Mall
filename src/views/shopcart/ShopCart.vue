<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物街({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" :pull-up-load="true" ref="scroll">
    <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/NavBar'
import CartBottomBar from './childcomps/CartBottomBar.vue'
import CartList from './childcomps/CartList.vue'
import Scroll from 'components/common/scroll/Scroll'
export default {
  data () {
    return {
    };
  },

  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed: {
    ...mapGetters(['cartLength','cartList']),
    // ...mapGetters({
    //   cartL: 'cartLength',
    //   cartLis: 'cartList'
    // }),
    cartLength() {
      return this.$store.getters.cartLength
    }
  },


  methods: {}
}

</script>
<style  scoped>
.cart {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  overflow: hidden; 
  left: 0;
  right: 0;
  top: 44px;
  bottom: 90px; 
  
}
</style>