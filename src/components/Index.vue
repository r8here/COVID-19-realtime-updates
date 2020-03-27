<template>
  <div>
    <div class="_3_col--grid">
      <Helplines />

      <india-state />

      <WorldWide />
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

._3_col--grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;
}
@media screen and (max-width: 500px) {
  ._3_col--grid{
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}
</style>
