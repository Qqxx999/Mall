<!--  -->
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @titClick="titClick" ref="nav"/>
    <scroll class="content" :pull-up-load="true" ref="scroll"
    @scroll="conScroll"
    :probe-type="3">
    <detail-swiper :top-mages="topMages" />
    <detail-goods-info :goods="goods" />
    <detail-shop-info :shop="shop"/>
    <detail-info :detail-info="detailInfo" @imageLoad="imageLoad" />
    <detail-params-info :param-info="paramInfo" ref="param"/>
    <detail-comment :comment-info="comments" ref="comment"/>
    <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom @addtoCart="addToCart"/>
     <back-top @click.native="backClick" v-show="isShowBack"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailInfo from './childComps/DetailInfo.vue';
import DetailParamsInfo from './childComps/DetailParamsInfo.vue';
import DetailComment from './childComps/DetailComment.vue';
import GoodsList from 'components/content/goods/GoodsList';
import DetailBottom from './childComps/DetailBottom.vue'; 

import {mapActions} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'

import {getDetail, GoodsInfo, Shop, GoodsParam, getRecommends} from 'network/detail';
export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topMages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comments: {},
      recommends: [],
      topYs: [],
      currentIndex: 0,
      getTopYs: null,
    };
  },
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamsInfo,
    Scroll,
    DetailComment,
    GoodsList,
    DetailBottom,
    // BackTop
  },
   created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.data.result
      this.topMages = data.itemInfo.topImages
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if(data.rate.list) {
        this.comments = data.rate.list[0]
      }
      getRecommends().then(res => {
        this.recommends = res.data.data.list
      })
      this.getTopYs = debounce(() => {
        this.topYs = []
        this.topYs.push(0),
        this.topYs.push(this.$refs.param.$el.offsetTop),
        this.topYs.push(this.$refs.comment.$el.offsetTop),
        this.topYs.push(this.$refs.recommend.$el.offsetTop)
        this.topYs.push(Number.MAX_VALUE)
      })
      // this.$nextTick(() => {
      //   // 根据最新数据 DOM已经被渲染出来 但是图片还没有加载完
       
      // })
    })
  },
  computed: {},


  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getTopYs();
    },
    titClick(index) {
     this.$refs.scroll.scroll.scrollTo(0, -this.topYs[index], 0)
    },
    conScroll(position) {
      const positionY = -position.y
      let length = this.topYs.length
      for(let i = 0; i < length-1; i++) {
        if (this.currentIndex !== i && (positionY >= this.topYs[i] && positionY <= this.topYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBack = -(position.y) > 1000
    },
    addToCart() {
      const product = {}
      product.image = this.topMages[0];
      product.title = this. goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid

      // this.$store.commit('addCart', product)
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })
      this.addCart(product).then(res => {
        this.$toast.show(res)
      })
    }
  }
}

</script>
<style  scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 38px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>