<template>
<div class="home">
    <div class="btn-con">
        <jsc-btn :sepGrop="['日', '月','年']"
                 type="isSepret"
                 v-model="tabValue"
                 @toggleTab="toggleTab"></jsc-btn>
    </div>
    <div class="btn-con">
        <jsc-btn :sepGrop="['日', '月','年']"
                 type="noSepret"
                 v-model="tabValue"
                 @toggleTab="toggleTab"></jsc-btn>
    </div>
    <div class="btn-con">
        <jsc-btn :sepGrop="['日', '月','年','小时','分钟','秒','继续']"
                 type="scrollX"
                 v-model="tabValue"
                 @toggleTab="toggleTab"></jsc-btn>
    </div>
    <div class="btn-con">
        <jsc-btn :sepGrop="['日', '月','年']"
                 type="titBt"
                 v-model="tabValue"
                 @toggleTab="toggleTab"></jsc-btn>
    </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      tabValue: 1
    }
  },
  methods: {
    toggleTab (value, index) {
      console.log(0)
    }
  }
}
</script>

<style  lang="scss">
.btn-con {
    padding: 0 20px;
    margin-bottom: 50px;
}
</style>
