import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: 'http://localhost:8080/myexample/module01/ActionOne/testMybatis.do',
//     method: 'post',
//     token
//   })
// }

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getInfo(parma) {
  return request({
      url: '/users/UserAction/getAllUser.do',
      method: 'get',
      parma
  })
}