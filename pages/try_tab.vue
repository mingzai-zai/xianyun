<template>
  <div class="try">
    <div class="tab">
      <span v-for="(e, i) in ['新闻', '体育', '啊啊']" :key="i" @click="current=i" :class="{red:current===i}">{{ e }}</span>
    </div>
    <div class="list" v-show='current===0'>
      <ul>
        <li>aaaaaaaaaaaaaa</li>
        <li>bbbbbbbbbbb</li>
        <li>vccccccccccc</li>
      </ul>
    </div>
    <div class="list" v-show='current===1'>
      <ul>
        <li>aaaaaqaaaaaaaaa</li>
        <li>bbbbbbebbbbb</li>
        <li>vccccrccccccc</li>
      </ul>
    </div>
    <div class="list" v-show='current===2'>
      <ul>
        <li>aaaaaaaaafaaaaaa</li>
        <li>bbbbbbbafbbbb</li>
        <li>vccccccadcccccc</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            current : 0
        }
    }
}
</script>

<style lang="less" scoped>
.tab {
  padding: 100px 100px 20px;
  span {
    margin-right: 20px;
  }
}
.list {
  padding-left: 100px;
}
.red{
    color: red;
}
</style>
