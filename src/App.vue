//шаблон компонента
<template>
  <div id="app">
    <h1>ToDo list</h1>
    <hr>
    <router-view />
  </div>
 
</template>



//стили для компонента
<style>
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
  
}
.childlist {
  border: 1px solid black;
  width: 250px;
  height: auto;
  margin-left: 5px;
}
.lists {
  display: flex;
  margin: auto;

  background: url('../src/assets/bg.jpg');
}
</style>
