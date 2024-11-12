<script setup lang='ts'>
import { computed, ref } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

const dataValues = ref<number[]>(
  [
    32, 45, 67, 58, 22, 71, 53, 60, 37, 44, 78, 25
  ]
);

const dataLabels = ref<string[]>(
  [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"
  ]
);
const toggleLegend = ref<boolean>(true);

const testData = computed<ChartData<"doughnut">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: [
        "#A9D1E8",
        "#87B9D6",
        "#6FA0C4",
        "#5C8CB0",
        "#4A7A9D",
        "#396788",
        "#2F5F74",
        "#234D62",
        "#1A4153",
        "#133648",
        "#0F2A39",
        "#0C1C2A"
      ],
    },
  ],
}));

const options = computed<ChartOptions<"doughnut">>(() => ({
  scales: {
    myScale: {
      type: "logarithmic",
      position: toggleLegend.value ? "left" : "right",
    },
  },
  plugins: {
    legend: {
      position: toggleLegend.value ? "top" : "bottom",
    },
  },
}));

const { doughnutChartProps } = useDoughnutChart({
  chartData: testData,
  options,
});

</script>

<template>
  <div>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
