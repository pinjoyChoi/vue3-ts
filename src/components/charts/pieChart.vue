<template>
  <div class="echarts" :id="id"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'PieChart',
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
        const dom = document.getElementById(ctx.id) as HTMLElement;
        chart = echarts.init(dom);
      } else {
        return;
      }
      if (!ctx.options) return;
      chart.setOption(ctx.options);
      console.log('setup', chart)
      chart.resize();
    };

    const eventListener = () => {
      if (chart) {
        chart.resize();
      }
    };

    onMounted(() => {
      initEcharts();
      console.log('onMounted')
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