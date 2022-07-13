<!--  -->
<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
      </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   isShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false
    }
  },

  components: {},

  computed: {},

  methods: {
    show(message, duration=2000){
      this.isShow = true
      this.message = message 

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },duration)
    }
  }  
}
</script>
<style  scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, .75);
    z-index: 9;
  }
</style>