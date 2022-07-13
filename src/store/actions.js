export default {
  
  addCart(context, payload) {
    // payload 新添加的商品
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid == payload.iid) {
    //     oldProduct == item;
    //   }
    // }
    return new Promise((resolve, reject) => {
    let oldProduct = context.state.cartList.find(item => {
      return item.iid == payload.iid
    })
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter', oldProduct)
      resolve('当前商品数量+1')
    } else {
      payload.count = 1
      context.commit('addToCart',payload)
      resolve('添加新的商品')
    }
  }) 
  }
 }