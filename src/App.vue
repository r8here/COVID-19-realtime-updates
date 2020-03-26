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
header {
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
.fs-2 {
  font-size: 1.2rem;
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
.table {
  max-width: 45rem;
  max-height: 30rem;
  overflow: auto;
  color: #d9dee3;
  table {
    width: 40rem;
    margin: auto;
    border-collapse: collapse;
    th {
      background-color: #032948;
    }
    th,
    td {
      border: 1px solid #07416f;
      padding: 5px 15px;
    }
    tr {
      &:hover {
        background-color: #073860;
      }
    }
  }
}
.search-input {
  padding: 8px 8px;
  border-radius: 4px;
  border: 1px solid #07416f;
  background: #011627;
  color: #f8fcff;
}
.affix {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
::placeholder {
  color: #ddd;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #ddd;
}

::-ms-input-placeholder {
  color: #ddd;
}
.d-grid {
  display: grid;
  grid-gap: 1rem;
}
._3_col--grid {
  @extend .d-grid;
  grid-template-columns: repeat(3, auto);
  
}
._4_col--grid {
  @extend .d-grid;
  grid-template-columns: repeat(4, auto);
}
@media screen and (max-width: 500px) {
  body {
    padding: 0 1rem;
  }
  .card {
    margin-bottom: 0.5rem;
  }
  ._3_col--grid {
    grid-template-columns: repeat(1, auto);
    grid-gap: 0;
  }
}
</style>
