const Mock = require('mockjs');

import loginApi from './login';

// login.ts
Mock.mock(/devApi\/api\/login(|\?\s*)/, 'get', loginApi.loginRes);
