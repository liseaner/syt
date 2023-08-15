import request from '@/utils/request';
import type {HospitalResponseData,  HospitalLevelAndRegionResponseData,HospitalInfo} from './type'
// 枚举
enum API{
    HOSPITAL_URL='/hosp/hospital/',
    // 获取医院的等级与地区的接口
    HOSPITALLEVElANDREGION_URL='/cmn/dict/findByDictCode/',
        //根据关键字医院的名字获取数据
        HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'


}
export const reqHospital=(page:number,limit:number,hostype='',districtCode='')=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
// {dictCode}获取医院的等级与地区的数据
export const reqHospitalLevelAndRegion=(dictCode:string)=>request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVElANDREGION_URL+dictCode);
//根据关键字获取医院的数据进行展示
export const reqHospitalInfo = (hosname: string) => request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname);