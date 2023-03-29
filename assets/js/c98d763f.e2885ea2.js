"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5255],{21481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),p=a(94891),r=a(75190),n=a(47507),d=a(24310),o=a(63303),m=(a(75035),a(85162));const c={id:"all-trip-updates-updates-agency-id-trip-updates-all-get",title:"All Trip Updates Updates",description:"All Trip Updates Updates",sidebar_label:"All Trip Updates Updates",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"all_trip_updates_updates__agency_id__trip_updates_all_get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Real-Time data"],description:"All Trip Updates Updates",method:"get",path:"/{agency_id}/trip_updates/all",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"All Trip Updates Updates",description:{type:"text/plain"},url:{path:[":agency_id","trip_updates","all"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},u=void 0,y={unversionedId:"api/all-trip-updates-updates-agency-id-trip-updates-all-get",id:"api/all-trip-updates-updates-agency-id-trip-updates-all-get",title:"All Trip Updates Updates",description:"All Trip Updates Updates",source:"@site/docs/api/all-trip-updates-updates-agency-id-trip-updates-all-get.api.mdx",sourceDirName:"api",slug:"/api/all-trip-updates-updates-agency-id-trip-updates-all-get",permalink:"/metro-api-v2/docs/api/all-trip-updates-updates-agency-id-trip-updates-all-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"all-trip-updates-updates-agency-id-trip-updates-all-get",title:"All Trip Updates Updates",description:"All Trip Updates Updates",sidebar_label:"All Trip Updates Updates",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"all_trip_updates_updates__agency_id__trip_updates_all_get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Real-Time data"],description:"All Trip Updates Updates",method:"get",path:"/{agency_id}/trip_updates/all",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"All Trip Updates Updates",description:{type:"text/plain"},url:{path:[":agency_id","trip_updates","all"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Trip Detail",permalink:"/metro-api-v2/docs/api/get-trip-detail-agency-id-trip-detail-vehicle-id-get"},next:{title:"Get Gtfs Rt Trip Updates By Field Name",permalink:"/metro-api-v2/docs/api/get-gtfs-rt-trip-updates-by-field-name-agency-id-trip-updates-field-name-field-value-get"}},g={},k=[{value:"All Trip Updates Updates",id:"all-trip-updates-updates",level:2}],T={toc:k},h="wrapper";function v(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,i.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"all-trip-updates-updates"},"All Trip Updates Updates"),(0,l.kt)("p",null,"All Trip Updates Updates"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,l.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string")))),(0,l.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"integer")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(d.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);