<template>
  <div class="small">
    <line-chart
      :chart-data="chartData"
      :options="{ responsive: true, maintainAspectRatio: false }"
    />
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./LineChart.js"
export default {
  name: "data-chart",
  components: {
    LineChart
  },
  props: ['chartData'],
  mounted() {
    console.log()
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
