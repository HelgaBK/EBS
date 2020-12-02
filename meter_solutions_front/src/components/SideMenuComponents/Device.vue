<template>
  <el-menu-item-group>
    <el-menu-item v-bind:index="group_index + '-' + index">{{group_index+1}}-{{index+1}}</el-menu-item>
  </el-menu-item-group>
</template>

<script>
export default {
  name: "Device",

  props: {
    device: {
      type: Object,
    },
    group_index: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },

  computed: {

  }
}
</script>

<style scoped>

</style>