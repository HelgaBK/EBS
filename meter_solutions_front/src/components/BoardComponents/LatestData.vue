<template>
  <el-row style="padding: 20px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 20px">
    <b style="font-size: 32px">Latest data</b>
    <el-col :span="24" style="display: flex; justify-content: center">
      <div v-for="(latestData, index) in deviceLatestData" :key="index" class="latest-data">
        {{latestData.timestamp}}<br>
        {{latestData.measurement}}: {{latestData.value}} {{latestData.designation}}<br>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "LatestData",

  data () {
    return {
      deviceLatestData: Object,
    }
  },

  props: {
    deviceId: {
      type: String,
      required: true
    },
  },

  mounted() {

    fetch('https://meter-solutions.herokuapp.com/api/device/' + this.deviceId + '/get_latest_data/')
        .then(response => response.json())
        .then(json => {
          this.deviceLatestData = json
        })
  },
}
</script>

<style scoped>
  .latest-data{
    margin: 10px;
    padding: 20px;
    background: lightblue;
    border-radius: 30px;
  }
</style>