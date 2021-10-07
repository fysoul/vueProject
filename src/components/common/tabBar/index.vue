<template>
    <TabBar>
          <Tbt path='/home' activecolor='orange'>
             <img src="~assets/img/tabBar/xz.png" slot="one"/>
            <img src="~assets/img/tabBar/qyc.png" slot='active'/>
            <div class="shou" slot="two">首页</div>
          </Tbt>

          <Tbt path='/about'>
            <img src="~assets/img/tabBar/xz.png" slot="one"/>
            <img src="~assets/img/tabBar/qyc.png" slot='active'/>
            <div class="shou" slot="two">关于</div>
          </Tbt>

          <Tbt path='/new'>
            <img src="~assets/img/tabBar/xz.png" slot="one"/>
            <img src="~assets/img/tabBar/qyc.png" slot='active'/>
            <div class="shou" slot="two">新闻</div>
          </Tbt>

          <Tbt path='/profile'>
             <img src="~assets/img/tabBar/xz.png" slot="one"/>
            <img src="~assets/img/tabBar/qyc.png" slot='active'/>
            <div class="shou" slot="two">其他</div>
          </Tbt>
    </TabBar>
    
</template>

<script>

import TabBar from 'common/tabBar/TabBar.vue'
import Tbt from 'common/tabBar/TabBarTemplate.vue'

export default {
     name:'Index',
     components:{
        TabBar,
        Tbt
     }
    }
    
</script>

<style>

</style>