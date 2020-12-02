<template>
  <el-submenu v-bind:index=index.toString()>
    <template slot="title"><i class="el-icon-menu"></i>{{group.name}}</template>
    <Device v-for="(device, device_index) of group.devices" :key="device.id" v-bind:device="device" v-bind:group_index="index" v-bind:index="device_index"/>
  </el-submenu>
</template>

<script>
import Device from "@/components/SideMenuComponents/Device";

export default {
  name: "GroupOfDevices",

  props: {
    group: {
      type: Object,
    },
    index: {
      type: Number,
    }
  },

  components: {
    Device,
  },

  computed: {

  }
}
</script>

<style scoped>

</style>