<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">
         购物街
      </div>
    </nav-bar>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
    };
  },

  components: {
    NavBar
  },

  computed: {},


  methods: {}
}

</script>
<style  scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  
    /* position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9; */
  }
</style>