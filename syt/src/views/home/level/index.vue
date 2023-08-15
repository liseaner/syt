<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
                <li  v-for="(level,index ) in levelArr" :class="{active:activeFlag==level.value}" :key="index"  @click="changeLevel(level.value)">{{level.name}}</li>
            
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
let levelArr=ref<HospitalLevelAndRegionArr>([]);
//控制医院等级高亮响应式数据
let activeFlag = ref<string>('');
// let active
onMounted(()=>{
    getLevel()
})
const getLevel=async()=>{
    let result:HospitalLevelAndRegionResponseData=await reqHospitalLevelAndRegion('HosType');
    console.log('resultLevel',result)
    if(result.code==200){
        levelArr.value=result.data;
    }

}
const changeLevel=(level:string)=>{
    console.log('level',level)
    activeFlag.value=level;
    $emit('getLevel',level)
}
let $emit=defineEmits(['getLevel'])
</script>
<!-- <script lang="ts">
export default {
  name: "Level",
};
</script> -->
<style scoped lang="scss">
.level{
    h1{
        font-weight:600
    }
    .content{
        display:flex;
        margin-top: 20px;
        color: #6b6b6b;
        // justify-content: space-between;
        .left{
            // width: 120px;
            margin-right: 10px;
            color: #9a9999;
        }
        ul{
            display: flex;
         
            li{
                margin-right: 15px;
            
            }
            .active{
                    color: #5490f1;
                }
                li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
        }
    }
}

</style>