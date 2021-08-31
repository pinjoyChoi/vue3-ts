import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
// md5 加密 - 不可逆
import md5 from 'js-md5';
import Crypto from '@/utils/crypto';

import Vrouter from '@/router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { LoginApi } from '@/api';

interface FormState {
  user: string;
  password: string;
}

export default defineComponent({
  name: 'Login',
  setup() {
    const Cookie = require('js-cookie');

    const formState = reactive<FormState>({
      user: 'admin',
      password: '111',
    });
    const handleFinish = async () => {
      const params = {
        user: formState.user,
        password: md5(formState.password),
        password2: Crypto.Encrypt(formState.password),
      }
      const { data } = await LoginApi.login(params);
      Cookie.set('_token_', data.data.token);
      message.success(data.msg);
      Vrouter.push('/');
      localStorage.setItem('selectedKeys', '["overview"]');
    };

    return {
      formState,
      handleFinish,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
})