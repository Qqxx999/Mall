import axios from 'axios';

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 10000
  })
  return instance(config)
}
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/hy66',
//       timeout: 10000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
// request ({
//   url: '/home'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })