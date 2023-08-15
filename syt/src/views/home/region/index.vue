<template>
    <div class="region">
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
                <li v-for="item in  RegionArr" :key="item.value" :class="{active:activeFlag==item.value}"  @click="changeLevel(item.value)">{{item.name}}</li>

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
//存储地区的数据
let RegionArr = ref<HospitalLevelAndRegionArr>([]);
//控制医院等级高亮响应式数据
let activeFlag = ref<string>('');
//地区组件挂载完毕获取地区数据
onMounted(() => {
  getRegion();
});
const getRegion=async()=>{
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "Beijin"
  );
  //存储全部地区的数据
  if (result.code == 200) {
    RegionArr.value = result.data;
  }
}
const changeLevel=(region:string)=>{
    activeFlag.value=region;
    $emit('getRegion',region)
}
let $emit=defineEmits(['getRegion'])
</script>
<script lang="ts">
export default {
  name: "Level",
};
</script>
<style scoped lang="scss">
.region{
    .content{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        color: #6b6b6b;
        // flex-wrap: wrap;
        .left{
            color: #9a9999;
        width: 100px;
        text-align: center;
        margin-right: 10px;
    

        }
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                margin-right: 20px;
                margin-bottom: 15px;
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