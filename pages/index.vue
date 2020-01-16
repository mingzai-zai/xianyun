<template>
  <div class="index">
    <!-- index不能定义样式（跟组件） -->
    <div class="swpier">
      <el-carousel height="700px">
        <el-carousel-item v-for="(item, index) in pics" :key="index">
          <div
            class="pic"
            :style="`background: url(${item}) center no-repeat;`"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pics:[
        // 'http://157.122.54.189:9095/assets/images/th03.jfif',
        // "http://157.122.54.189:9095/assets/images/th04.jfif"
      ],
    }
  },
  mounted () {
    console.log(1)
  }
};
</script>

<style lang="less" scoped>
.swpier {
  height: 700px;
  min-width: 1000px;
  .pic {
    height: 100%;
  }
}
</style>
