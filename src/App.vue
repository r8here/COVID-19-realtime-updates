<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  max-width: 45rem;
  margin: 1rem auto;
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
.mb-1{
  margin-bottom: 1rem;
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
@media screen and (max-width: 500px){
  body {
    padding: 0 1rem
  }
  .card {
    margin-bottom: 0.5rem;
  }
}
</style>
