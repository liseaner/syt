<template>
  <div class="search">
    <el-autocomplete
        v-model="hosname"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
        @select="goDetail"
      />
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
 
</template>

<script setup lang="ts">
import { Search} from '@element-plus/icons-vue';
import { ref } from "vue";
//引入请求方法
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo } from "@/api/home/type";
import { useRouter } from "vue-router";
//创建路由器对象
let $router = useRouter();
//收集搜索的关键字(医院的名字)
let hosname = ref<string>("");
const querySearch=async(keyword:string,cb:any)=>{
  console.log('keyword',keyword)
  let result:HospitalInfo=await reqHospitalInfo(keyword) ;
  console.log('res',result)
    //整理数据，变成人家组件需要数据格式
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode, //存储医院的编码
    };
  });
  // console.log(result.data);
  //给组件提供展示的户数
  cb(showData);
  }
  //点击某一个推荐项
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  $router.push({ path: "/hospital",query:{hoscode:item.hoscode}});
};

</script>

<style scoped lang="scss">
.search{
    width: 100%;
    height: 50rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    :deep(.el-input__wrapper){
        width: 600px;
        margin-right: 10px;
    }
}

</style>