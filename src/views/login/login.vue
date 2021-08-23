<template>
  <div class="login flex-center">
    <div class="form-wrap">
      <a-form
        class="flex-column"
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item class="pb-20" label="账号">
          <a-input v-model:value="formState.user" placeholder="Username">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item class="pb-20" label="密码">
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4 }">
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.user === '' || formState.password === ''"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  name: 'login',
  setup() {
    const formState = reactive<FormState>({
      user: '',
      password: '',
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
      message.success('登录成功！');
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
})
</script>
<style lang="scss" src="./login.scss" scoped />