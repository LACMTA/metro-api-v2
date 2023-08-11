"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[404],{96242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),o=a(94891),l=a(75190),n=a(47507),p=a(24310),m=a(63303),d=(a(75035),a(85162));const c={id:"get-routes-agency-id-route-overview-get",title:"Get Routes",description:"Get Routes",sidebar_label:"Get Routes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_routes__agency_id__route_overview_get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail","all"],title:"AllAgencyIdEnum",type:"string"}},{in:"query",name:"route_code",required:!1,schema:{default:"",title:"Route Code",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Routes",method:"get",path:"/{agency_id}/route_overview",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Routes",description:{type:"text/plain"},url:{path:[":agency_id","route_overview"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"route_code",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},u=void 0,y={unversionedId:"api/get-routes-agency-id-route-overview-get",id:"api/get-routes-agency-id-route-overview-get",title:"Get Routes",description:"Get Routes",source:"@site/docs/api/get-routes-agency-id-route-overview-get.api.mdx",sourceDirName:"api",slug:"/api/get-routes-agency-id-route-overview-get",permalink:"/metro-api-v2/docs/api/get-routes-agency-id-route-overview-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-routes-agency-id-route-overview-get",title:"Get Routes",description:"Get Routes",sidebar_label:"Get Routes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_routes__agency_id__route_overview_get",parameters:[{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail","all"],title:"AllAgencyIdEnum",type:"string"}},{in:"query",name:"route_code",required:!1,schema:{default:"",title:"Route Code",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Static data"],description:"Get Routes",method:"get",path:"/{agency_id}/route_overview",servers:[{description:"Production Server",url:"https://api.metro.net"},{description:"Development Server",url:"https://dev-metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com/"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Routes",description:{type:"text/plain"},url:{path:[":agency_id","route_overview"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"route_code",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"agency_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Calendar",permalink:"/metro-api-v2/docs/api/get-calendar-agency-id-calendar-service-id-get"},next:{title:"Populate Route Stops",permalink:"/metro-api-v2/docs/api/populate-route-stops-agency-id-route-stops-route-code-get"}},g={},k=[{value:"Get Routes",id:"get-routes",level:2}],v={toc:k},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-routes"},"Get Routes"),(0,r.kt)("p",null,"Get Routes"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{in:"path",name:"agency_id",required:!0,schema:{description:"An enumeration.",enum:["LACMTA","LACMTA_Rail","all"],title:"AllAgencyIdEnum",type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{in:"query",name:"route_code",required:!1,schema:{default:"",title:"Route Code",type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,r.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)("li",null,(0,r.kt)("span",{className:"badge badge--info"},"anyOf"),(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))),(0,r.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"integer")))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);