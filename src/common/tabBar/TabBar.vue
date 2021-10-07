<template>
    <div  class="all">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
  .all{
      width: 100%;
      height: 100px;
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      /* background: gray; */
      justify-content: space-around;
      box-shadow: 0 -5px 5px rgba(250, 0, 0, .2);
  }
</style>