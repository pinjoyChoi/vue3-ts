<template>
  <div class="header height-full mlr-16 flex-between">
    <div class="left"></div>
    <div class="right">
      <a-dropdown :trigger="['click']">
        <a class="icon-box" @click.prevent>
          <img :src="avatar" alt="用户头像">
        </a>
        <template #overlay>
          <a-menu style="width: 150px">
            <a-menu-item key="0">
              <div class="flex">
                <span>{{$t('headers_menu.account')}}：</span>
                <span class="flex-1 text-ellipsis">admin</span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="flex-between plr-8">
                <span
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
              <a href="">{{ $t('headers_menu.resetPassword') }}</a>
            </a-menu-item>
            <a-menu-item key="3">
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

export default defineComponent({
  name: 'Header',
  setup() {
    const { locale } = useI18n();

    const state = reactive({
      isCh: true,
      langs: [
        { value: 'ch' },
        { value: 'en' },
      ],
      langCurrent: ref('ch'),
      avatar: require('@/assets/images/avatar.jpg')
    });

    const changeLang = (lang: string) => {
      locale.value = lang;
      state.langCurrent = lang
    }

    return {
      ...toRefs(state),
      changeLang,
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