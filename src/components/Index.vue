<template>
  <div class="_3_col--grid">
    <Helplines />

    <india-state />

    <WorldWide />
  </div>
</template>

<script>
import axios from "axios";
import WorldWide from "./WorldWide";
import IndiaState from "./IndiaState";
import Helplines from "./Helplines";
export default {
  name: "Index",
  components: {
    WorldWide,
    IndiaState,
    Helplines
  }
};
</script>
