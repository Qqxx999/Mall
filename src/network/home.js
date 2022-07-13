import { request } from "./request";
export function getGoodsMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getGoodsItem(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}