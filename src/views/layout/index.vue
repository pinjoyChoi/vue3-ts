<template>
  <a-layout class="height-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="220">
      <Aside :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header v-model:collapsed="collapsed" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue';

import Aside from './aside/aside.vue';
import Header from './header.vue';
import Main from './main.vue';

export default defineComponent({
  name: 'Layout',
  components: { Aside, Header, Main },
  setup() {
    const state = reactive({
      selectedKeys: [],
    });

    const collapsed = ref(false);

    return {
      ...toRefs(state),
      collapsed,
    };
  },
})
</script>

<style lang="scss">

</style>