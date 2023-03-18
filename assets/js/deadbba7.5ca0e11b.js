"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7074],{72830:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var a=s(87462),o=(s(67294),s(3905)),i=s(26389),l=s(94891),n=s(75190),r=s(47507),p=s(24310),m=s(63303),c=(s(75035),s(85162));const d={id:"get-gopass-schools-get-gopass-schools-get",title:"Get Gopass Schools",description:"Get Gopass Schools",sidebar_label:"Get Gopass Schools",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_gopass_schools_get_gopass_schools_get",parameters:[{in:"query",name:"show_missing",required:!1,schema:{default:!1,title:"Show Missing",type:"boolean"}},{in:"query",name:"combine_phone",required:!1,schema:{default:!1,title:"Combine Phone",type:"boolean"}},{in:"query",name:"groupby_column",required:!1,schema:{description:"An enumeration.",enum:["id","school"],title:"GoPassGroupEnum",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Other data"],description:"Get Gopass Schools",method:"get",path:"/get_gopass_schools",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Gopass Schools",description:{type:"text/plain"},url:{path:["get_gopass_schools"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"show_missing",value:""},{disabled:!1,key:"combine_phone",value:""},{disabled:!1,key:"groupby_column",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},u=void 0,g={unversionedId:"api/get-gopass-schools-get-gopass-schools-get",id:"api/get-gopass-schools-get-gopass-schools-get",title:"Get Gopass Schools",description:"Get Gopass Schools",source:"@site/docs/api/get-gopass-schools-get-gopass-schools-get.api.mdx",sourceDirName:"api",slug:"/api/get-gopass-schools-get-gopass-schools-get",permalink:"/metro-api-v2/docs/api/get-gopass-schools-get-gopass-schools-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-gopass-schools-get-gopass-schools-get",title:"Get Gopass Schools",description:"Get Gopass Schools",sidebar_label:"Get Gopass Schools",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_gopass_schools_get_gopass_schools_get",parameters:[{in:"query",name:"show_missing",required:!1,schema:{default:!1,title:"Show Missing",type:"boolean"}},{in:"query",name:"combine_phone",required:!1,schema:{default:!1,title:"Combine Phone",type:"boolean"}},{in:"query",name:"groupby_column",required:!1,schema:{description:"An enumeration.",enum:["id","school"],title:"GoPassGroupEnum",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["Other data"],description:"Get Gopass Schools",method:"get",path:"/get_gopass_schools",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Get Gopass Schools",description:{type:"text/plain"},url:{path:["get_gopass_schools"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"show_missing",value:""},{disabled:!1,key:"combine_phone",value:""},{disabled:!1,key:"groupby_column",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Vehicle Position Updates",permalink:"/metro-api-v2/docs/api/vehicle-position-updates-agency-id-vehicle-positions-field-name-field-value-get"},next:{title:"Login",permalink:"/metro-api-v2/docs/api/login-login-get"}},y={},h=[{value:"Get Gopass Schools",id:"get-gopass-schools",level:2}],k={toc:h};function b(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-gopass-schools"},"Get Gopass Schools"),(0,o.kt)("p",null,"Get Gopass Schools"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"show_missing",required:!1,schema:{default:!1,title:"Show Missing",type:"boolean"}},mdxType:"ParamsItem"}),(0,o.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"combine_phone",required:!1,schema:{default:!1,title:"Combine Phone",type:"boolean"}},mdxType:"ParamsItem"}),(0,o.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"groupby_column",required:!1,schema:{description:"An enumeration.",enum:["id","school"],title:"GoPassGroupEnum",type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful Response")),(0,o.kt)("div",null,(0,o.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,o.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation Error")),(0,o.kt)("div",null,(0,o.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"detail"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"loc"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)("li",null,(0,o.kt)("span",{className:"badge badge--info"},"anyOf"),(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"string")))),(0,o.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,o.kt)("li",null,(0,o.kt)("div",null,(0,o.kt)("strong",null,"integer")))))),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(p.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(r.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);