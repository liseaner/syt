//对于axios函数库进行二次封装?
//你工作的时候是否axios进行二次封装?二次封装的目的是什么那?
//目的:1,利用axios请求、响应拦截器功能
//目的2:请求拦截器,一般可以在请求头中携带公共的参数:token
//目的3:响应拦截器,可以简化服务器返回的数据,处理http网络错误
import axios from 'axios';
import { ElMessage } from 'element-plus'
// import useUserStore from '@/store/modules/user';
const request=axios.create({
    baseURL:'/api',
    timeout:5000
});
// 请求拦截器
request.interceptors.request.use((config)=>{
    return config;
});
// 响应拦截器
request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    let status=error.response.status;
    switch (status) {
        case 404:
              //错误提示信息
              ElMessage({
                    type: 'error',
                    message: '请求失败路径出现问题'
              })
              break;
        case 500 | 501 | 502 | 503 | 504 | 505:
              ElMessage({
                    type: 'error',
                    message: '服务器挂了'
              })
              break;
        case 401:
              ElMessage({
                    type: 'error',
                    message: '参数有误'
              })
              break;
  }
return Promise.reject(new Error(error.message))
})
export default request