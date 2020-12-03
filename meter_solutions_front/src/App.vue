<template>
  <div id="app">
    <el-header>
      <MainMenu/>
    </el-header>
    <el-main>
      <DashBoard  v-bind:user="user"/>
    </el-main>
  </div>
</template>

<script>

  import MainMenu from "@/components/MainMenu";
  import DashBoard from "@/components/DashBoard";

export default {
  name: 'App',
  data() {
    return {
      user: {id: 1, email: 'test@test.test', flag: false},
      token: null
    }
  },
  components: {
    MainMenu,
    DashBoard,
  },
  methods: {

  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");

  html, body {
    margin: 0px !important;
    padding: 0px !important;
    font-family: Avenir, Helvetica, Arial, sans-serif !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
