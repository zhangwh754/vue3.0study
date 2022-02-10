// test.js 仅做示例: 通过GET请求返回一个对象数组，包含人名和年龄
import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'

function randomData() {
  return mock({
    name: '@cname',
    'from|1-100': 100
  })
}

export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: randomData()
      };
    }
  }
] as MockMethod[]
