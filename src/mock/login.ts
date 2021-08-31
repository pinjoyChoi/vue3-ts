const Mock = require('mockjs');

const loginRes = () => Mock.mock({
  code: 200,
  data: {
    msg: '登录成功',
    resCode: '0000',
    data: {
      "token": /\d{15,15}/,
    },
  }
})

export default {
  loginRes,
}
