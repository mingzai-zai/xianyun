<template>
  <div class="index">
    <!-- index不能定义样式（跟组件） -->
    <!-- 背景图片切换 -->
    <div class="swpier">
      <el-carousel height="700px">
        <el-carousel-item v-for="(item, index) in pics" :key="index">
          <div
            class="pic"
            :style="
              `background: url(${$axios.defaults.baseURL +
                item.url}) center no-repeat;`
            "
          ></div>
        </el-carousel-item>
      </el-carousel>
      <!-- 搜索框的做法 -->
    <div class="container">
      <div class="banner-content">
        <div class="search-bar">
          <!-- tab栏 -->
          <el-row type="flex" class="search-tab" >
            <span v-for="(e,i) in about" :key='i' @click="tab_click(i)">
              <i>{{e.title}}</i>
            </span>
          </el-row>

          <!-- 输入框 -->
          <el-row type="flex" align="middle" class="search-input">
            <input :placeholder="about[corrent].placeholder"/>
            <i class="el-icon-search"></i>
          </el-row>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [
        // 'http://157.122.54.189:9095/assets/images/th03.jfif',
        // "http://157.122.54.189:9095/assets/images/th04.jfif"
      ],
      about:[
        {
          title:'攻略',
          placeholder:'搜索城市'
        },
        {
          title:'酒店',
          placeholder:'请输入城市搜索酒店'
        },
        {
          title:'机票',
          placeholder:'出发目的地'
        },
      ],
      corrent:0
    };
  },
  async mounted() {
    // console.log(1)
   let res = await this.$axios({
      url: "/scenics/banners"
    })
    this.pics = res.data.data;
      // .then(res => {
      //   this.pics = res.data.data;
      //   // console.log(this.pics)
      //   // console.log(res)
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  },
  methods: {
    tab_click(index){
      this.corrent=index;
      if(this.corrent===2) {
        this.$router.push('/air')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.swpier {
  position: relative;
  height: 700px;
  min-width: 1000px;
  .pic {
    height: 100%;
  }
}
.container {
  min-width: 1000px;
  height: 84px;
  // margin: 0 auto;
  left: 18%;
  top: 40%;
  position: absolute;

  /deep/ .el-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }

  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px transparent solid;

    .search-bar {
      width: 552px;
      margin: 0 auto;
    }

    .search-tab {
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #eee;
        }
      }

      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;

        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }

    .search-input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;

      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }

      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
