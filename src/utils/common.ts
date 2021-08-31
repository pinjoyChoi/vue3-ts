import { Modal } from 'ant-design-vue';

import Vrouter from '@/router'

const Cookies = require('js-cookie');

const getToken = () => {
  return Cookies.get('_token_');
}

const removeToken = () => {
  Cookies.remove('_token_');
  localStorage.removeItem('selectedKeys');
}

const logout = () => {
  removeToken();
  Modal.confirm({
    title: '退出',
    content: '确认退出系统？',
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
      Vrouter.push('login')
    },
  });
}

export {
  getToken,
  removeToken,
  logout,
}