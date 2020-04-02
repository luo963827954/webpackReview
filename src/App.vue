<template>
  <div id="app">
    {{msg}}
    <Demo/>
  </div>
</template>  

<script>
import Demo from './views/demo'

export default {
  components:{
    Demo,
  },
  data(){
    return{
      msg:'apppppSSSSSSSSSSSS'
    }
  }
}
</script>  

<style scoped>
#app{
  color:red;
}
</style>