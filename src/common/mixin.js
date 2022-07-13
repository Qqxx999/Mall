import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBack: false
    }
  },
  methods: {
    backClick() {
      // ref可以直接访问scroll里的data和methods
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
  }
}