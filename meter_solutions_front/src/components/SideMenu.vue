<template>
  <div>
    <div style="padding-top: 10px; padding-bottom: 10px; font-size: 24px; background: lightgray">Your Groups</div>

    <el-menu>
      <GroupOfDevices v-for="(group, index) of groups" :key="group.id" v-bind:group="group" v-bind:index="index" />
    </el-menu>
    <AddGroupForm v-on:form_submitted="add_group"/>
  </div>
</template>

<script>

import AddGroupForm from "@/components/SideMenuComponents/AddGroupForm";

export default {
  name: "SideMenu",
  components: {
    GroupOfDevices,
    AddGroupForm,
  },
  data() {
    return {
      groups: [
        {id: 1, name: 'group1', devices: [{id: 1, name: 'device1'}, {id: 2, name: 'device2'}, {id: 3, name: 'device3'}]},
        {id: 2, name: 'group2', devices: [{id: 1, name: 'device1'}, {id: 2, name: 'device2'}, {id: 3, name: 'device3'}]},
        {id: 3, name: 'group3', devices: [{id: 1, name: 'device1'}, {id: 2, name: 'device2'}, {id: 3, name: 'device3'}]},
        {id: 4, name: 'group4', devices: [{id: 1, name: 'device1'}, {id: 2, name: 'device2'}, {id: 3, name: 'device3'}]}
      ],
    }
  },
  methods: {
    add_group(name) {
      this.groups.push({id: this.groups.length+1, name: name , devices: [{id: 1, name: 'device1'}, {id: 2, name: 'device2'}, {id: 3, name: 'device3'}]})
    }
  }
}
</script>

<style scoped>

</style>