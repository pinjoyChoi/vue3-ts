<template>
  <a-sub-menu :key="item.path">
    <template #title>
      <div class="flex-vcenter">
        <span class="anticon">
          <i class="fa fa-fw" :class="item.meta?.icon" />
        </span>
        <span>
          {{ item.meta?.title }}
        </span>
      </div>
    </template>
    <template v-if="item.children.length">
      <template v-for="childrenItem in item.children">
        <!-- 不存在子路由 -->
        <a-menu-item v-if="!childrenItem.children" :key="childrenItem.path">
          <router-link :to="{ name: childrenItem.name }">{{ childrenItem.meta?.title }}</router-link>
        </a-menu-item>
        <!-- 存在子路由 -->
        <AsideItem v-else :key="childrenItem?.path" :item="childrenItem" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
export default {
  name: 'AsideItem',
  props: ['item'],
}
</script>

<style lang="scss" scoped>

</style>