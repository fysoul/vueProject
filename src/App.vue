<template>
<div>
   <h3>css一样可以定义变量</h3>
   <p>p标签的默认样式222</p>
   <p>p标签的默认样式333</p>
   <router-view></router-view>
   <Index></Index>
</div>
   
</template>

<script>
import Index from 'components/common/tabBar/index.vue'

export default {
  name: 'App',
  components: {
     Index
  }
  
}
</script>

<style>

</style>
