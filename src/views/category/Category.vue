<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="center">分类</div>
    </nav-bar>
    <div class="content">
    <tab-menu class="tab-menu" :categories="categories" @selectItem="selectItem"/>
    <sub-category class="sub-category" :categoryData="categoryData" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu.vue'
import SubCategory from './childComps/SubCategory.vue'


import {getCategory, getSubCategory} from 'network/category'
export default {
  data () {
    return {
      categories: [],
      currentIndex: -1,
      categoryData: []
    };
  },
  created() {
    // 请求分类数据
    this.AgetCategory()
  },
  components: {
    NavBar,
    TabMenu,
    SubCategory
  },

  computed: {},

  methods: {
    AgetCategory() {
      getCategory().then(res => {
        // console.log(res);
        this.categories = res.data.data.category.list
        this.AgetSubCategory(0)
      })
     
    },
    AgetSubCategory(index) {
      // this.currentIndex = index
      const mailKey = this.categories[index].maitKey
      getSubCategory(mailKey).then(res => {
        console.log(res);
        this.categoryData = res.data.data.list
        console.log(this.categoryData);
      })
    },
    selectItem(index) {
      this.AgetSubCategory(index)
    },
    // activeIndex(categoryData) {
    //   this.currentIndex = categoryData.index
    //   this.maitKey = categoryData.maitKey
    //   this.AgetSubCategory(index)
    // }
  }
}

</script>
<style  scoped>
.nav-bar {
  background-color: var(--color-high-text);
}
.center {
  color: #fff
}
.content {
  display: flex;
}
.tab-menu {
  width: 100px;
}
.sub-category {
  flex: 1;
}
</style>