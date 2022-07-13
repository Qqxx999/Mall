<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
  .nav-bar {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 100);
    
  }
  .left {
    width: 66px;
  }
  .right {  
    width: 66px;
  }
  .center {
    flex: 1;
  }

</style>