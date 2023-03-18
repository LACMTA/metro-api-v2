"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8055],{22740:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>k});var a=i(87462),l=(i(67294),i(3905)),r=i(26389),n=i(94891),s=i(75190),p=i(47507),d=i(24310),o=i(63303),m=(i(75035),i(85162));const c={id:"get-trip-detail-agency-id-trip-detail-vehicle-id-get",title:"Get Trip Detail",description:"Get Trip Detail",sidebar_label:"Get Trip Detail",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_trip_detail__agency_id__trip_detail__vehicle_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"vehicle_id",required:!0,schema:{title:"Vehicle Id",type:"string"}},{in:"query",name:"geojson",required:!1,schema:{default:!1,title:"Geojson",type:"boolean"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Real-Time data"],description:"Get Trip Detail",method:"get",path:"/{agency_id}/trip_detail/{vehicle_id}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Trip Detail",description:{type:"text/plain"},url:{path:[":agency_id","trip_detail",":vehicle_id"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"geojson",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"vehicle_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},y=void 0,u={unversionedId:"api/get-trip-detail-agency-id-trip-detail-vehicle-id-get",id:"api/get-trip-detail-agency-id-trip-detail-vehicle-id-get",title:"Get Trip Detail",description:"Get Trip Detail",source:"@site/docs/api/get-trip-detail-agency-id-trip-detail-vehicle-id-get.api.mdx",sourceDirName:"api",slug:"/api/get-trip-detail-agency-id-trip-detail-vehicle-id-get",permalink:"/metro-api-v2/docs/api/get-trip-detail-agency-id-trip-detail-vehicle-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-trip-detail-agency-id-trip-detail-vehicle-id-get",title:"Get Trip Detail",description:"Get Trip Detail",sidebar_label:"Get Trip Detail",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_trip_detail__agency_id__trip_detail__vehicle_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"vehicle_id",required:!0,schema:{title:"Vehicle Id",type:"string"}},{in:"query",name:"geojson",required:!1,schema:{default:!1,title:"Geojson",type:"boolean"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Real-Time data"],description:"Get Trip Detail",method:"get",path:"/{agency_id}/trip_detail/{vehicle_id}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Trip Detail",description:{type:"text/plain"},url:{path:[":agency_id","trip_detail",":vehicle_id"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"geojson",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"vehicle_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Canceled Trip Summary",permalink:"/metro-api-v2/docs/api/get-canceled-trip-summary-canceled-service-summary-get"},next:{title:"All Trip Updates Updates",permalink:"/metro-api-v2/docs/api/all-trip-updates-updates-agency-id-trip-updates-all-get"}},g={},k=[{value:"Get Trip Detail",id:"get-trip-detail",level:2}],h={toc:k};function v(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-trip-detail"},"Get Trip Detail"),(0,l.kt)("p",null,"Get Trip Detail"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(s.Z,{className:"paramsItem",param:{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},mdxType:"ParamsItem"}),(0,l.kt)(s.Z,{className:"paramsItem",param:{in:"path",name:"vehicle_id",required:!0,schema:{title:"Vehicle Id",type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(s.Z,{className:"paramsItem",param:{in:"query",name:"geojson",required:!1,schema:{default:!1,title:"Geojson",type:"boolean"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,l.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string")))),(0,l.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"integer")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(d.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);