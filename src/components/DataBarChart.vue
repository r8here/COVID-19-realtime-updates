<template>
  <div class="small">
    <Bar
      :chart-data="chartData"
      :options="{ responsive: true, maintainAspectRatio: false }"
      :width='200'
      :height='200'
    />
  </div>
</template>

<script>
import axios from "axios";
import Bar from "./BarChart";
export default {
  name: "data-chart",
  components: {
    Bar
  },
  props: ["chartData"],
  mounted() {
    console.log();
  },
  data() {
    return {
      loadingAll: true
    };
  }
};
</script>