"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5755],{90679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>T,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),p=a(26389),r=a(94891),n=a(75190),l=a(47507),o=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"get-trip-shapes-agency-id-trip-shapes-shape-id-get",title:"Get Trip Shapes",description:"Get Trip Shapes",sidebar_label:"Get Trip Shapes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_trip_shapes__agency_id__trip_shapes__shape_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"shape_id",required:!0,schema:{title:"Shape Id"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Trip Shapes",method:"get",path:"/{agency_id}/trip_shapes/{shape_id}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Trip Shapes",description:{type:"text/plain"},url:{path:[":agency_id","trip_shapes",":shape_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"shape_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},y=void 0,h={unversionedId:"api/get-trip-shapes-agency-id-trip-shapes-shape-id-get",id:"api/get-trip-shapes-agency-id-trip-shapes-shape-id-get",title:"Get Trip Shapes",description:"Get Trip Shapes",source:"@site/docs/api/get-trip-shapes-agency-id-trip-shapes-shape-id-get.api.mdx",sourceDirName:"api",slug:"/api/get-trip-shapes-agency-id-trip-shapes-shape-id-get",permalink:"/docs/api/get-trip-shapes-agency-id-trip-shapes-shape-id-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-trip-shapes-agency-id-trip-shapes-shape-id-get",title:"Get Trip Shapes",description:"Get Trip Shapes",sidebar_label:"Get Trip Shapes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_trip_shapes__agency_id__trip_shapes__shape_id__get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},{in:"path",name:"shape_id",required:!0,schema:{title:"Shape Id"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Trip Shapes",method:"get",path:"/{agency_id}/trip_shapes/{shape_id}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Trip Shapes",description:{type:"text/plain"},url:{path:[":agency_id","trip_shapes",":shape_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"shape_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Stops",permalink:"/docs/api/get-stops-agency-id-stops-stop-id-get"},next:{title:"Get Bus Trips",permalink:"/docs/api/get-bus-trips-agency-id-trips-trip-id-get"}},u={},g=[{value:"Get Trip Shapes",id:"get-trip-shapes",level:2}],k={toc:g};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-trip-shapes"},"Get Trip Shapes"),(0,s.kt)("p",null,"Get Trip Shapes"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail"],title:"AgencyIdEnum",type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"shape_id",required:!0,schema:{title:"Shape Id"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(p.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,s.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("li",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);