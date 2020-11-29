<template>
  <el-row style="padding: 20px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 20px">
    <el-col :span="12"><img width="300px" src="https://ae01.alicdn.com/kf/H20d3d2fdcbab4695849c8457509914725/90-250-wifi.jpg_960x960.jpg" alt=""></el-col>
    <el-col :span="12" class="infoColumn">
      <el-row>
           <span style="font-size: 32px">
             Type: <b>{{deviceInfo.device_model.type.type}}</b> | Model: <b>{{deviceInfo.device_model.name}} </b>
             <el-popover
                 placement="bottom-start"
                 width="auto"
                 trigger="hover">
               <div>
                 <h3 class="popover-header">{{deviceInfo.device_model.name}}</h3>
                 <div class="popover-body">
                   <b>Type<br></b>
                   <span>{{deviceInfo.device_model.type.type}}<br><br></span>
                   <b>Indications<br></b>
                   <span v-for="(indication, index) in deviceInfo.device_model.indications" :key="index">{{indication.measurement}} : {{indication.designation}}<br></span>
                 </div>
               </div>
               <el-button slot="reference" style="padding: 3px"><i class="el-icon-info" style="font-size: 30px"></i></el-button>
            </el-popover>
           </span>
      </el-row>
      <el-row>
        <span style="font-size: 48px">Name: {{deviceInfo.name}}</span>
      </el-row>
      <el-row>
        <span style="font-size: 32px">Status: {{deviceInfo.status}}</span>
      </el-row>
      <el-row style="padding-top: 10px">
        <el-button v-on:click="toogle" type="primary">Toogle device</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "DeviceInfo",

  props: {
    deviceId: {
      type: String,
      required: true
    },
    deviceInfo: Object,
  },

  methods: {
    toogle: function () {
      // fetch('https://meter-solutions.herokuapp.com/manage/turn_off/zmai90_5002915A1C05')
      alert("ВСЕ ЗЛАМАНО")
    }
  }
}
</script>

<style scoped>
  .infoColumn {
    text-align: left;
  }

  .popover-header {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 32px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .popover-body {
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>