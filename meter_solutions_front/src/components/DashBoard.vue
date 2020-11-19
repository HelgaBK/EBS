<template>
  <el-container>
    <el-aside width="auto">
      <SideMenu v-bind:user="user"/>
    </el-aside>
    <el-container>
      <Board v-bind:deviceId = "deviceId"/>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import Board from "@/components/Board";

export default {
  name: "DashBoard",
  components: {
    SideMenu,
    Board,
  },
  data() {
    return {
      deviceId: "1"
    }
  },
  props: {
    user: Object,
  }
}
</script>

<style scoped>

</style>