// test.js 仅做示例: 通过GET请求返回一个名字数组
import { MockMethod } from 'vite-plugin-mock'
import { mock, Random } from 'mockjs'
const data = mock({
  'list|10': [
    {
      name: '@cname',
      'age|1-100': 100
    }
  ]
})

export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data
      };
    }
  }
] as MockMethod[]
