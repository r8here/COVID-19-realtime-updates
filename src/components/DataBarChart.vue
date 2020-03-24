<template>
  <div class="small">
    <h3>World</h3>
    <Bar
      :chart-data="chartData"
      :options="{ responsive: true, maintainAspectRatio: false }"
    />
    <hr class="divider" />
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

<style></style>
