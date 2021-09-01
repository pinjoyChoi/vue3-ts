<template>
  <div class="echarts" :id="id"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'BarChart',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: String,
      default: '0'
    }
  },
  setup(ctx) {
    let chart: any = null;

    const initEcharts = () => {
      if (!chart) {
        const dom: any = document.getElementById(ctx.id);
        chart = echarts.init(dom);
      } else {
        return;
      }
      if (!ctx.options) return;
      chart.setOption(ctx.options);
    };
    const eventListener = () => {
      if (chart) {
        chart.resize();
      }
    };
    onMounted(() => {
      initEcharts();
      window.addEventListener('resize', eventListener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', eventListener);
    });
  },
});
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>