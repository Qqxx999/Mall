<!--  -->
<template>
  <div class="home">
    <home-nav-bar/>
    <tab-control :titles="['流行','精选','新款']" 
      @tabClick="tabClick"
      class="tab-control1"
      ref="tabControl1"
      v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" 
    @scroll="showBackTop"
    :pull-up-load="true"
    @pullingUp="LoadMore">
      <home-swiper :banners="banners" @imgload="SwiperLoad" />
      <home-recommends :recommends="recommends" />
      <home-feature/>
      <tab-control :titles="['流行','精选','新款']" 
      @tabClick="tabClick"
      class="tab-control"
      ref="tabControl"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"/>
  </div>
</template>

<script>

import HomeNavBar from './childcomps/HomeNavBar.vue'
import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommends from './childcomps/HomeRecommends.vue'
import HomeFeature from './childcomps/HomeFeature.vue'

import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

// import {debounce} from 'common/utils'
import {getGoodsMultidata, getGoodsItem} from 'network/home'
export default {
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBack: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 获取主页数据
    this.getGoodsMultidata()
    // 获取商品数据
    this.getGoodsItem('pop')
    this.getGoodsItem('new')
    this.getGoodsItem('sell')
  },
  // mounted() {
  //   // 监听图片加载完成
  //   // const refresh = debounce(this.$refs.scroll.refresh, 50)
  //   this.$bus.$on('imageLoad', () => {
  //     // refresh()
  //   })
  // },
  activated() {
  
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
   
    this.saveY = this.$refs.scroll.scroll.y
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },

  methods: {
    getGoodsMultidata() {
      getGoodsMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getGoodsItem(type) {
      const page = this.goods[type].page + 1
      getGoodsItem(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1  

        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2: 
          this.currentType = 'sell'
          break;
      }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0, 300)
    },
    showBackTop(position) {
      this.isShowBack = -(position.y) > 1000
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    LoadMore() {
      this.getGoodsItem(this.currentType)
    },
    SwiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}

</script>
<style  scoped>
  
  .home {
    position: relative;
    height: 100vh;
  }
  .tab-control1 {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }  
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 58px;
   
  }
</style>