<template>
  <nav class="card affix">
    <router-link to="worldwide" class="nav-item">Worldwide Case</router-link>
    <router-link to="india" class="nav-item">India</router-link>
    <router-link to="helplines-india" class="nav-item"
      >India Helpline Numbers</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Nav",
  components: {
    // Index
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  max-width: 35em;
  margin: 1rem auto;
  // background-color: #7f53ac;
  // background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  .nav-item {
    flex: 0 0 auto;
    padding: 8px 10px;
    margin-right: 1rem;
    text-decoration: none;
    color: #fff;
  }
}
</style>
