"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4627],{11544:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var a=i(87462),s=(i(67294),i(3905)),r=i(26389),p=i(94891),n=i(75190),l=i(47507),o=i(24310),d=i(63303),m=(i(75035),i(85162));const c={id:"get-bus-trips-agency-id-trips-trip-id-get",title:"Get Bus Trips",description:"Get Bus Trips",sidebar_label:"Get Bus Trips",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_bus_trips__agency_id__trips__trip_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"trip_id",required:!0,schema:{title:"Trip Id"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Bus Trips",method:"get",path:"/{agency_id}/trips/{trip_id}",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Bus Trips",description:{type:"text/plain"},url:{path:[":agency_id","trips",":trip_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"trip_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},u=void 0,y={unversionedId:"api/get-bus-trips-agency-id-trips-trip-id-get",id:"api/get-bus-trips-agency-id-trips-trip-id-get",title:"Get Bus Trips",description:"Get Bus Trips",source:"@site/docs/api/get-bus-trips-agency-id-trips-trip-id-get.api.mdx",sourceDirName:"api",slug:"/api/get-bus-trips-agency-id-trips-trip-id-get",permalink:"/metro-api-v2/docs/api/get-bus-trips-agency-id-trips-trip-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-bus-trips-agency-id-trips-trip-id-get",title:"Get Bus Trips",description:"Get Bus Trips",sidebar_label:"Get Bus Trips",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_bus_trips__agency_id__trips__trip_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"trip_id",required:!0,schema:{title:"Trip Id"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Bus Trips",method:"get",path:"/{agency_id}/trips/{trip_id}",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Bus Trips",description:{type:"text/plain"},url:{path:[":agency_id","trips",":trip_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"trip_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Trip Shapes",permalink:"/metro-api-v2/docs/api/get-trip-shapes-agency-id-trip-shapes-shape-id-get"},next:{title:"Get Canceled Trip",permalink:"/metro-api-v2/docs/api/get-canceled-trip-canceled-service-all-get"}},g={},k=[{value:"Get Bus Trips",id:"get-bus-trips",level:2}],h={toc:k},T="wrapper";function v(e){let{components:t,...i}=e;return(0,s.kt)(T,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-bus-trips"},"Get Bus Trips"),(0,s.kt)("p",null,"Get Bus Trips"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"trip_id",required:!0,schema:{title:"Trip Id"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,s.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);