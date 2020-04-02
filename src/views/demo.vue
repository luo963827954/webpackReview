<template>
  <div>
    <p v-for="item in demo">{{item}}</p>
    <button @click="handleSave">改变</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      demo:{
        a:'百度',
        b:'淘宝',
        c:'京东',
      }
    }
  },
  methods:{
    handleSave(){
     this.$set(this.demo,'a','啊哈哈哈11111111111111')
    }
  }
}
</script>