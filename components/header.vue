<template>
  <div class="header">
    <el-row justify="space-between" type="flex" class="row">
      <div class="left">
        <img src="/logo.jpg" alt="" />
      </div>
      <el-row class="banner" type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <div class="right">
        <span class="el-icon-bell">消息</span>
        <nuxt-link to="/user/login" v-if='!$store.state.user.userInfo.token'>登录/注册</nuxt-link>
        <el-dropdown  v-if='$store.state.user.userInfo.token'>
          <span class="el-dropdown-link">
            <img :src="`${$axios.defaults.baseURL+$store.state.user.userInfo.user.defaultAvatar}`" alt="" class="user_pic">
            {{$store.state.user.userInfo.user.nickname}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.row {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 60px;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  min-width: 1000px;
  border-bottom: 2px solid #ccc;
  box-shadow: 2px 0px 3px 3px #666;
}
.left {
  img {
    width: 156px;
    display: block;
  }
}
.banner {
  flex: 1;
  a {
    display: block;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      border-bottom: 5px solid #409eff;
      color: yellow;
    }
  }
  .nuxt-link-exact-active {
    background-color: #409eff;
  }
}
.user_pic{
  height: 36px;
  width: 36px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
