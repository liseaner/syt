// 定义首页模块ts数据模型
export interface ResponseData{
    code:number,
    code:string,
    ok:boolean
}
// 代表已有的医院的数据的ts类型
export interface hospital{
    "id":string,
    "createTime":string,
    "updateTime":string,
    "isDeleted":number,
    "param":{
        "hostypeString": string,
        "fullAddress": string
    },
    "hoscode": string,
    "hosname":  string,
    "hostype": string,
    "provinceCode":  string,
    "cityCode":  string,
    "districtCode":  string,
    "address": string,
    "logoData":string,
    "intro": string,
    "route":  string,
    "status":number,
    "bookingRule": {
      "cycle": number,
      "releaseTime":  string,
      "stopTime": string,
      "quitDay": number,
      "quitTime": string,
      "rule":string[]
    }
}

// 存储全部已有医院的ts数组类型
export type Content=hospital[]
// 获取已有医院接口返回的数据类型
export interface HospitalResponseData extends ResponseData{
    data:Content,
    "pageable": {
        "sort": {
          "sorted": boolean,
          "unsorted": boolean,
          "empty": boolean
        },
        "pageNumber": number,
        "pageSize": number,
        "offset": number,
        "paged": boolean,
        "unpaged": boolean
      },
      "totalPages": number,
      "totalElements": number,
      "last": boolean,
      "first":boolean,
      "sort": {
        "sorted": boolean,
        "unsorted":boolean,
        "empty": boolean
      },
      "numberOfElements": number,
      "size": number,
      "number": number,
      "empty":boolean
}

// 代表医院等级或者地区数据ts类型
export interface HospitalLevelAndRegion{
        "id": number,
        "createTime":string,
        "updateTime": string,
        "isDeleted":number,
        "param": {},
        "parentId": number,
        "name": string,
        "value": string,
        "dictCode": string,
        "hasChildren": boolean
      }
export type HospitalLevelAndRegionArr=HospitalLevelAndRegion[];
// 获取地区或者医院等级的返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData{
    data: HospitalLevelAndRegionArr
}



export interface HospitalInfo extends ResponseData{
    data:Content
}
