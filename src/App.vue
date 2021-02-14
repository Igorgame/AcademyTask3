//шаблон компонента
<template>
  <div id="app">
    <hr>
    <router-view />
  </div>
</template>



//стили для компонента
<style>
html {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  max-width: 100%;
  height: auto;
}
.mainlist {
  border: 1px solid black;
  height: auto;
  padding: 10px;
  position: relative;
  background-color:burlywood;
}
.childlist {
  border: 1px solid black;
  width: 100%;
  height: auto;
  margin-left: 5px;
  background-color:burlywood;
}
.lists {
  display: flex;
  margin: auto;
}
</style>
