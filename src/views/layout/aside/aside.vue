<template>
  <div>
    <div class="logo flex-center">
      <img class="height-full" :src="logo" alt="logo">
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="selectMenu"
      @openChange="openMenu"
    >
      <template v-for="item in routers">
        <template v-if="!item.meta.hidden">
          <!-- 单级菜单 -->
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">{{ item.meta?.title }}</router-link>
          </a-menu-item>
          <!-- 多级菜单 -->
          <AsideItem v-else :item="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

import AsideItem from './aside-item.vue';

export default defineComponent({
  name: 'Aside',
  components: { AsideItem },
  setup() {
    const { options } = useRouter();
    const routers = options.routes.find(x => x.name === 'index')?.children;

    const state = reactive({
      selectedKeys: JSON.parse(localStorage.getItem('selectedKeys') as string),
      openKeys: JSON.parse(localStorage.getItem('openKeys') as string),
      logo: require('@/assets/images/logo.jpg')
    });

    const selectMenu = (params: { item: any, key: string, keyPath: string[] }) => {
      const { keyPath } = params;
      state.selectedKeys = keyPath;
      localStorage.setItem('selectedKeys', JSON.stringify(state.selectedKeys));
    }

    const openMenu = (openKeys: string[]) => {
      state.openKeys = openKeys;
      localStorage.setItem('openKeys', JSON.stringify(state.openKeys));
    }

    return {
      ...toRefs(state),
      routers,
      selectMenu,
      openMenu,
    };
  }
})
</script>

<style lang="scss" scoped>
.logo {
  height: 64px;
  padding: 16px;
  border-bottom: 1px solid #333;
}
</style>