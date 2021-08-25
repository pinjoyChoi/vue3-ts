<template>
  <a-layout class="height-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="240">
      <Aside/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header/>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <Main/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Aside from './aside/aside.vue';
import Header from './header.vue';
import Main from './main.vue';

export default defineComponent({
  name: 'Layout',
  components: { Aside, Header, Main },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    };
  },
})
</script>

<style lang="scss">

</style>