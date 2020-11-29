<template>
  <el-row style="padding: 20px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 20px">
    <b style="font-size: 32px">Data clip</b>
    <el-col :span="24" style="display: flex; justify-content: center">
      <div class="block">
        <el-date-picker
            v-model="date"
            type="datetimerange"
            :picker-options="pickerOptions"
            @change="set_date"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            align="right">
        </el-date-picker>
        <el-select v-model="measurement" multiple placeholder="Measurement" style="margin-left: 20px">
          <el-option
              v-for="indication in deviceInfo.device_model.indications"
              :key="indication.measurement"
              :label="indication.measurement"
              :value="indication.measurement">
          </el-option>
        </el-select>
        {{ data_clip }}
        <AreaChart v-bind:period="date" v-bind:dataclip="data_clip"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {

  name: "DataClip",

  methods: {
    set_date: function () {
      var tmpString = this.date[0].toJSON() + ''
      this.date[0] = tmpString.split('.')[0]
      tmpString = this.date[1].toJSON() + ''
      this.date[1] = tmpString.split('.')[0]
      console.log(this.date[0] + " " + this.date[1])

      fetch('http://0.0.0.0:9999/api/device/' + this.deviceId + '/get_data_by_date/?start-date=' + this.date[0] + '&end-date=' + this.date[1]+ '&measurement=' + this.measurement[0])
          .then(response => response.json())
          .then(json => {
            this.data_clip = json
          })

      console.log(this.data_clip[1].value)
    }
  },

  mounted() {
    var tmpString = this.date[0].toJSON() + ''
    this.date[0] = tmpString.split('.')[0]
    tmpString = this.date[1].toJSON() + ''
    this.date[1] = tmpString.split('.')[0]
    console.log(this.date[0] + " " + this.date[1])

    fetch('http://0.0.0.0:9999/api/device/' + this.deviceId + '/get_data_by_date/?start-date=' + this.date[0] + '&end-date=' + this.date[1]+ '&measurement=' + this.measurement[0])
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.data_clip = json
        })
  },

  components: {
    AreaChart,
  },

  props: {
    deviceId: {
      type: String,
      required: true
    },
    deviceInfo: Object,
  },

  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      measurement: '',
      date: [Date("2020-11-30 22:00:00"), Date("2020-12-07 22:00:00")],
      data_clip: []
    }
  },
}
</script>

<style scoped>

</style>