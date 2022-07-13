<!--  -->
<template>
  <div class="bottom">
    <div class="chebutton">
      <check-button  :is-checked="isSelectAll" class="check-button"/>
      <span @click="checkClick">全选</span>
      <div class="price">
        合计: ￥{{totalPrice}}
      </div>
      <div class="calcu" @click="caClick">
        去结算 ({{checkLength}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    CheckButton
  },

  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length ==0) {
        return false
      } else {
        return !this.$store.state.cartList.find(item => !item.checked)
      }
     
    //   for (let item of this.$store.state.cartList) {
    //     if (!item.checked) {
    //       return false
    //     }
    //   }
    //   return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    caClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}

</script>
<style  scoped>
.bottom {
  background-color: #eee;
  position: relative;
  bottom: -525px;
  height: 40px;
  line-height: 40px;
}
.chebutton {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  margin-left: 30px;
}
.calcu {
  padding-right: 10px;
  margin-left: auto;
  background-color: red;
}
</style>