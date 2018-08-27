<template>
  <div id="app">
    <ZPreview :info-data="viewInfo"/>
  </div>
</template>

<script>
import ZPreview from './components/preview'

export default {
  name: 'app',
  components: {
    ZPreview
  },
  data() {
    return {
       viewInfo: {
        // 淘口令
        code: '',
        // 期刊主题信息
        name: 'zhang',
        edition: null,
        introduction: '',
        // 周刊背景列表
        bgUrls: [],
        contentUrls: [],
        // 推荐商品列表
        goodsList: [],
        // 往期主题
        journalList: []
      }
    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
