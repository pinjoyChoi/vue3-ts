<template>
  <a-sub-menu>
    <template #title>{{ item.meta?.title }}</template>
    <template v-if="item.children.length">
      <template v-for="childrenItem in item.children">
        <!-- 不存在自己子路由 -->
        <a-menu-item v-if="!childrenItem.children" :key="childrenItem.path">
          <router-link :to="childrenItem.path">{{ childrenItem.meta?.title }}</router-link>
        </a-menu-item>
        <!-- 存在子路由 -->
        <AsideItem v-else :key="childrenItem.path" />
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

<style lang="scss" scoped></style>