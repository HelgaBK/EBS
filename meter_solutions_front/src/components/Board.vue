<template>
  <el-container direction="vertical">
     <DeviceInfo v-bind:deviceId="deviceId" v-bind:deviceInfo="deviceInfo"/>
     <LatestData v-bind:deviceId="deviceId"/>
     <DataClip v-bind:deviceId="deviceId" v-bind:deviceInfo="deviceInfo"/>
  </el-container>
</template>

<script>
import LatestData from "@/components/BoardComponents/LatestData";
import DeviceInfo from "@/components/BoardComponents/DeviceInfo";


export default {
  name: "Board",
  components: {
    DataClip,
    LatestData,
    DeviceInfo
  },

  props: {
    deviceId: {
      type: String,
      required: true
    },
  },

  data () {
    return {
      deviceInfo: Object,
    }
  },

  mounted() {
    fetch('https://meter-solutions.herokuapp.com/api/device/' + this.deviceId)
        .then(response => response.json())
        .then(json => {
          this.deviceInfo = json
        })

  },

}
</script>

<style scoped>

</style>