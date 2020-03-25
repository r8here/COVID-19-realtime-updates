<template>
  <div id="app">
    <router-view />
    <div class="source text-white fs12 ">
      <br />
      API Source: https://github.com/NovelCOVID/API
    </div>
  </div>
</template>

<style lang="scss">
#app {
  max-width: 65rem;
  margin: 1rem;
}
body {
  background-color: #011627;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  h2 {
    margin-top: 0;
  }
}
header{
  max-width: 45rem;
  margin: auto;
}
.fs12 {
  font-size: 12px;
}
a,
.text-white {
  color: #fff;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.mb-0 {
  margin-bottom: 0;
}
.mb-1 {
  margin-bottom: 1rem;
}
.divider {
  border: 0;
  border-bottom: 1px solid #07416f;
  height: 1px;
}
.card {
  background-color: #032948;
  padding: 1rem;
  @extend .text-white;
  margin-bottom: 1rem;
  border: 1px solid #07416f;
  border-radius: 4px;
  margin-top: 0;
}
@media screen and (max-width: 500px) {
  body {
    padding: 0 1rem;
  }
  .card {
    margin-bottom: 0.5rem;
  }
}
</style>
