<template>
  <el-form :model="user" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="user.username" placeholder="用户名/手机"> </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input v-model="user.password" placeholder="密码" type="password">
      </el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">
      登录
    </el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        // callback是与否都要设置的就好像导航守卫的next一样
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      // 表单数据
      user: {
        username: "",
        password: ""
      },
      // 表单规则
      rules: {
        username: [
          {
            message: "用户名输入11位数字",
            pattern: /^[1][3-9]\d{9}$/,
            trigger: "blur"
          },
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ validator: validatePassWord, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      this.$refs.form.validate(async result => {
        if (result) {
          let res = await this.$axios({
            url: "/accounts/login",
            data: this.user,
            method: "POST"
          });
          console.log(res);
          let {data} = res;
          // 发送数据存储
          this.$store.commit('user/eidtUserInfo', data) 
          this.$router.push('/')
        }else {
            // this.$message.fail('信息有误')
            return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
