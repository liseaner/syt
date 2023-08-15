<template>
    <div>
        <carousel />
        <search />
        <el-row>
            <el-col :span="20">
                <level @getLevel="getLevel"/>
                <region @getRegion="getRegion"/>
                <div class="card" v-if="hasHospitalArr.length>0">
                    <Card class="item" v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
                </div>
                <el-empty v-else description="暂无数据" />
                <div>
                    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" :small="small" :disabled="disabled" :background="true"
                        layout=" prev, pager, next, jumper,->, sizes,total" :total="total" @size-change="handleSizeChange"
                        @current-change="handleCurrentChange" />
                </div>
            </el-col>
            <el-col :span="4">

            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import carousel from './carousel/index.vue';
import search from './search/index.vue';
import level from './level/index.vue';
import region from './region/index.vue';
import Card from './card/index.vue';
import {onMounted,ref } from 'vue';
import  {reqHospital} from '@/api/home/index.ts'
import {Content,HospitalResponseData} from '@/api/home/type.ts'
let pageSize= ref<number>(10)
let pageNo=ref<number>(1)
const small = ref(false)
const disabled = ref(false)
let hasHospitalArr=ref<Content>([]);
let total=ref<number>(0)
//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageNo.value=1
  getHospitalInfo()
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  getHospitalInfo()
}
onMounted(()=>{
    getHospitalInfo()
})
const getHospitalInfo=async()=>{
    let result:HospitalResponseData=await reqHospital( pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value);
    hasHospitalArr.value=result.data.content;
    total.value=result.data.totalElements;
}
// 获取等级
const getLevel=(level:string)=>{
console.log(level)
hostype.value=level
getHospitalInfo()
}
// 获取地区
const getRegion=(region:string)=>{
    districtCode.value=region;
    getHospitalInfo()
}
</script>

<style scoped lang="scss">
.card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin-bottom: 20px;
    }
}
</style>