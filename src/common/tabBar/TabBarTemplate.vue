<template>
    <div class="box"  @click="change">
        <slot v-if="flag" name="active"></slot>
        <slot v-else name="one"></slot>
        <div :style="mycolor">
            <slot  name="two"></slot>
        </div>
        
    </div> 
</template>

<script>
export default {
    name:'Tbt',
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // flag:false,
            // isActive:true
        }
    },
    methods: {
        change(){
            // this.flag=!this.flag
            // this.flag=this.$route.path.indexOf(this.props.path)!==-1
            // this.flag=(this.$route.path==this.props.path)
            // console.log('this.$route.path',this.$route.path)
            // console.log('this.props.path',this.path)
            this.$router.push(this.path)
        }
    },
    computed:{
        flag(){
            return this.$route.path.indexOf(this.path)!=-1
        },
        mycolor(){
            return this.flag?{color:this.activecolor}:{}
        }
    },
    // mounted() {
    //     console.log('path',this.path)
        
    // },
}
</script>

<style >
/* scoped */
.box{
  /* flex: 1; */
  /* text-align: center; */
  height: 100px;
}
 img{
     width: 60px;
     height: 60px;
     vertical-align: middle;
 }
 .shou{
     width: 60px;
     height: 40px;
     text-align: center;
     line-height: 40px;
 }

 .active{
     color: red;
 }
</style>