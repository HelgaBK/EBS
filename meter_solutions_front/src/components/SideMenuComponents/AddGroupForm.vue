<template>
  <el-form :model="addGroupForm" status-icon :rules="rules"  ref="addGroupForm" label-width="auto" class="form">
    <el-row>
      <el-col :span="16">
        <el-form-item label="Add group" prop="name">
          <el-input v-model="addGroupForm.name" placeholder="Name of group"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" class="submitButton"  @click="submitForm('addGroupForm')">Add</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "AddGroupForm",

  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the name again'));
      } else if (value.length > 20) {
        callback(new Error('Name is too long'));
      } else {
        callback();
      }
    };
    return {
      addGroupForm: {
        name: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
      }
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('form_submitted', this.addGroupForm.name)
          this.$refs[formName].resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }

}
</script>

<style scoped>
  .form {
    padding-left: 10px;
    display: flex;
    background: lightgray;
    padding-top: 43px;
    padding-bottom: 20px;
    bottom: 0px;
  }
  .submitButton {
    width: 85%;
  }
</style>