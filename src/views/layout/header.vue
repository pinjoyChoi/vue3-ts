<template>
  <div class="header height-full mr-16 flex-between">
    <div class="left flex-center fs-20 pointer pl-16" @click="handleCollapsed">
      <component :is="collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'" />
    </div>
    <div class="right">
      <a-dropdown :trigger="['click']">
        <a class="icon-box" @click.prevent>
          <img :src="avatar" alt="用户头像">
        </a>
        <template #overlay>
          <a-menu style="width: 150px">
            <a-menu-item key="0">
              <div class="flex-center">
                <i class="fa fa-fw fa-user-circle" />
                <a-divider type="vertical" />
                <span>{{$t('headers_menu.account')}}：</span>
                <span class="flex-1 text-ellipsis">admin</span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="flex-center">
                <i class="fa fa-fw fa-font flex-center" />
                <a-divider type="vertical" />
                <span
                  class="flex-1"
                  v-for="item in langs"
                  :key="item.value"
                  :value="item.value"
                  @click="changeLang(item.value)"
                  :class="{'fc-primary': langCurrent === item.value}"
                >
                  {{ $t(`headers_menu.${item.value}`)}}
                </span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <span href="">{{ $t('headers_menu.resetPassword') }}</span>
            </a-menu-item>
            <a-menu-item key="3" @click="logout">
              <span>{{ $t('headers_menu.logout') }}</span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import { logout } from '@/utils/common'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Header',
  components: { MenuFoldOutlined, MenuUnfoldOutlined },
  emits: ['update:collapsed'],
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const { locale } = useI18n();

    const state = reactive({
      isCh: true,
      langs: [
        { value: 'ch' },
        { value: 'en' },
      ],
      langCurrent: ref('ch'),
      avatar: require('@/assets/images/avatar.jpg'),
    });

    const changeLang = (lang: string) => {
      locale.value = lang;
      state.langCurrent = lang
    }

    // 向父组件emit菜单拓展、收缩事件
    const handleCollapsed = () => {
      context.emit('update:collapsed', !props.collapsed)
    }

    return {
      ...toRefs(state),
      changeLang,
      handleCollapsed,
      logout,
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-box {
  img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
}
</style>