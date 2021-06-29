<template>
<div class="home">
    <!-- <tstPage></tstPage> -->
    <jsc-btn :sepGrop="['日', '月','年']"
             type="isSepret"
             v-model="tabValue"
             @toggleTab="toggleTab"></jsc-btn>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
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
