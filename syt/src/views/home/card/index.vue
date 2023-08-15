<template>
    <el-card shadow="hover" @click="goDetail">
       <div class="content">
        <div class="left">
            <div class="title">{{hospitalInfo.hosname}}</div>
          <div class="bottom">
            <div class="level">
                <svg t="1691895416351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4021" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4022"></path></svg>
                <div class="level1">{{hospitalInfo.param.hostypeString}}</div>
            </div>
            <div class="time">
                <svg t="1691895497455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width="16" height="16"><path d="M512 64c-256 0-460.8 208-460.8 460.8s208 460.8 460.8 460.8 460.8-208 460.8-460.8S768 64 512 64zM512 940.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S742.4 940.8 512 940.8z" p-id="5115"></path><path d="M809.6 544l-278.4 0 0-281.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4l0 307.2c0 12.8 9.6 22.4 22.4 22.4 0 0 3.2 0 3.2 0l297.6 0c12.8 0 22.4-9.6 22.4-22.4C832 553.6 822.4 544 809.6 544z" p-id="5116"></path></svg>
                <div class="time1">每天{{hospitalInfo.bookingRule.releaseTime}}放号</div>
            </div>
          </div>
        </div>
        <div class="right">
            <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`"/>
        </div>
       </div>
    </el-card>
 
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
//获取路由器对象
let $router = useRouter();
//点击医院卡片的时候跳转到医院详情页面
const goDetail = () => {
  $router.push({ path: "/hospital",query:{hoscode:props.hospitalInfo.hoscode}});
};
//接受父组件传递过来的props->即为已有的医院的数据
let props = defineProps(["hospitalInfo"]);
</script>

<style scoped lang="scss">
:deep(.el-card__body){
    padding:0px 10px 0px 20px;
   
}
.content{
    // width: 410px;
    // height: 98px;
    display: flex;
    // margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    .left{
        width:60%;
        // height: 100%;
        height: 98px;
        display: flex;
        align-items: normal;
        flex-direction: column;
        justify-content: space-between;


        .title{
            font-weight: 600;
            margin-top: 20px;
            // margin-top: 20px;
        }
        .bottom{
            display: flex;
            // margin-top: 30px;
            color: #9c9d9f;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            .level{
                display: flex;
                // margin-right: 50px;
                .level1{
                    margin-left: 5px;
                }
            }
            .time{
                display: flex;
                div{
                    margin-left: 5px;
                }
            }
        }
    }
    .right{
        img{
            width:80px;
            height:80px;
            border-radius:50%;
        }
    }
}
</style>