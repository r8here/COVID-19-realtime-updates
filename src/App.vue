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
}
.text-white {
  color: #fff;
}
.card {
  background-color: #032948;
  padding: 1rem;
  @extend .text-white;
  margin-bottom: 1rem;
  border: 1px solid #07416f;
  border-radius: 4px;
}
@media screen and (max-width: 500px){
  body {
    padding: 0 1rem
  }
}
</style>
