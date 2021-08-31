<template>
  <a-layout class="height-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="220">
      <Aside :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header v-model:collapsed="collapsed" />
      </a-layout-header>
      <div class="tags-view-container mtb-8 ml-16">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in matchedRouters" :key="item.name">{{item.meta?.title}}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <a-layout-content class="mlr-16 mb-16 plr-24 ptb-24" :style="{ background: '#fff', minHeight: '280px' }">
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import Vrouter from '@/router';

import Aside from './aside/aside.vue';
import Header from './header.vue';
import Main from './main.vue';

export default defineComponent({
  name: 'Layout',
  components: { Aside, Header, Main },
  setup() {
    const collapsed = ref(false);

    const matchedRouters = computed(() => {
      Vrouter.currentRoute.value.matched;
      return Vrouter.currentRoute.value.matched;
    })

    return {
      collapsed,
      matchedRouters,
    };
  },
})
</script>

<style lang="scss">

</style>