<!--  -->
<template>
  <div class="wrapper" ref="wrapper"> 
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BsCroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    };
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BsCroll 
  },
  mounted() {
    this.scroll = new BsCroll(this.$refs.wrapper,{
      observeImage: {
        debounceTime: 10
      },
      observeDom: true,
      probeType: 3,
      click: true,
      pullUpLoad: this.pullUpLoad
     })
     this.scroll.on('scroll', position => {
      //  console.log(position);
      this.$emit('scroll', position)
     })
     this.scroll.on('pullingUp', () => {
      //  console.log('上拉记载更多');
       this.$emit('pullingUp')

     })
  },
  computed: {},

  methods: {
    refresh() {
      this.scroll.refresh()
    }
  }
}

</script>
<style  scoped>
</style>