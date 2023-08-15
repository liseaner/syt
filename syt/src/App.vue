<template>
 <div class="container">
    <!--顶部全局组件-->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <!-- 4364 -->
      <router-view></router-view>
    </div>
    <HosiptalBottom />
    <!-- 登录组件 -->
   
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request';
import {onMounted} from "vue";
onMounted(()=>{
//   request.get('/hosp/hospital/1/10').then((res)=>{
// console.log('res',res)
  // }
  // )
})



</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 1200px;
  }
}
</style>