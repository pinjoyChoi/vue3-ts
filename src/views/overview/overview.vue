<template>
  <div class="overview width-full height-full">
    <div class="chart-box">
      <pie-chart :id="'pieChart'"
                 :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import PieChart from "@/components/charts/pieChart.vue";

export default {
  name: "Overview",
  components: { PieChart },
  setup() {
    const xdata = ["去年同月累计", "去年同月", "年初至本月累计", "本月"];
    const ydata = [
      "集装箱（万TEU）",
      "内河（万吨）",
      "沿海（万吨）",
      "其中：外贸（万吨）",
      "总港口吞吐量（万吨）",
    ];
    const vdata1 = [1623, 4963, 38279, 13865, 43242];
    const vdata2 = [600, 1966, 14011, 4799, 15876];
    const vdata3 = [1350, 4806, 37360, 13632, 41900];
    const vdata4 = [515, 2028, 14361, 4887, 16389];
    const piedata = [
      {
        name: "水路运输",
        value: 4947289.9,
      },
      {
        name: "铁路运输",
        value: 58478.1,
      },
      {
        name: "公路运输",
        value: 1108923.3,
      },
      {
        name: "航空运输",
        value: 1166309.8,
      },
      {
        name: "邮件运输",
        value: 394.8,
      },
      {
        name: "其它运输",
        value: 108465.2,
      },
    ];

    const options = {
      title: {
        text: "2020年1-4月港口吞吐量情况",
      },
      legend: {
        data: xdata,
        bottom: "45%",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      xAxis: {
        type: "value",
        max: 45000,
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
        },
      },
      yAxis: {
        data: ydata,
        axisLine: {
          show: true,
        },
      },

      grid: [
        {
          bottom: "55%",
          top: "15%",
          left: "150px"
        },
      ],
      series: [
        {
          name: "去年同月累计",
          type: "bar",
          data: vdata1,
        },
        {
          name: "去年同月",
          type: "bar",
          data: vdata2,
        },
        {
          name: "年初至本月累计",
          type: "bar",
          data: vdata3,
        },
        {
          name: "本月",
          type: "bar",
          data: vdata4,
        },
        {
          name: "进出口合计（5月）",
          type: "pie",
          radius: "55%",
          //center: ['50%', '50%'],
          data: piedata,
          bottom: "0%",
          top: "55%",
          left: "0%",
          right: "65%",
        },
      ],
    };

    return {
      options,
    };
  },
};
</script>

<style lang="scss" scoped>
.chart-box {
  width: 100%;
  height: 100%;
}
</style>