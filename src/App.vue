<template>
  <div id="app">
    <el-menu router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/vue2.x">Vue 子应用</el-menu-item>
      <el-menu-item index="/react">React 子应用</el-menu-item>
      <el-menu-item index="/games/src/">俄罗斯方块</el-menu-item>
    </el-menu>
    <!-- 主应用的视图 -->
    <router-view></router-view>
    <!-- Vue2.x 子应用的插槽 -->
    <div id="vue"></div>
    <!-- React 子应用的插槽 -->
    <div id="react"></div>
    <div id="page1"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
