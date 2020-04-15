<template>
  <div id="app">
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <van-button type="default">默认按钮</van-button>
      </van-tab>
      <van-tab title="标签 2">
        <van-button type="primary">主要按钮</van-button>
      </van-tab>
      <van-tab title="标签 3">
        <van-button type="info">信息按钮</van-button>
      </van-tab>
      <van-tab title="标签 4">
        <van-button type="warning">警告按钮</van-button>
      </van-tab>
    </van-tabs>
    <div class="box">
      444444444444444444
    </div>
  </div>
</template>  

<script>

export default {
  data(){
    return{
      active:'',
      msg:'apppppSSSSSSSSSSSS'
    }
  }
}
</script>  

<style scoped>

/* .box{
  position: absolute;
  width: 100%;
  top: 46px;
  left: 0;
  bottom: 0;
  background: red;
  
} */
</style>