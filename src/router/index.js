import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const ShopCart = () => import('views/shopcart/ShopCart');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail');

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      component: Detail
    }
  ],
  mode: 'history'
})

export default router