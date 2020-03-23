<template>
  <div class="small">
    <line-chart
      :chartData="data"
      :options="{ responsive: true, maintainAspectRatio: false }"
    />
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./LineChart.js";
export default {
  name: "LineChartContainer",
  components: {
    LineChart
  },
  props: ['data'],
  mounted() {
    
  },
  data() {
    return {
      loadingAll: true
    };
  },
  methods: {
    
  }
};
</script>

<style></style>
