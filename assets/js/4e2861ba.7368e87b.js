"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8610],{70150:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>y,metadata:()=>u,toc:()=>k});var a=i(87462),l=(i(67294),i(3905)),r=i(26389),o=i(94891),n=i(75190),s=i(47507),m=i(24310),p=i(63303),c=(i(75035),i(85162));const y={id:"verify-email-route-verify-email-email-verification-token-get",title:"Verify Email Route",description:"Verify Email Route",sidebar_label:"Verify Email Route",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"verify_email_route_verify_email__email_verification_token__get",parameters:[{in:"path",name:"email_verification_token",required:!0,schema:{title:"Email Verification Token",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["User Methods"],description:"Verify Email Route",method:"get",path:"/verify_email/{email_verification_token}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Verify Email Route",description:{type:"text/plain"},url:{path:["verify_email",":email_verification_token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"email_verification_token"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},d=void 0,u={unversionedId:"api/verify-email-route-verify-email-email-verification-token-get",id:"api/verify-email-route-verify-email-email-verification-token-get",title:"Verify Email Route",description:"Verify Email Route",source:"@site/docs/api/verify-email-route-verify-email-email-verification-token-get.api.mdx",sourceDirName:"api",slug:"/api/verify-email-route-verify-email-email-verification-token-get",permalink:"/metro-api-v2/docs/api/verify-email-route-verify-email-email-verification-token-get",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verify-email-route-verify-email-email-verification-token-get",title:"Verify Email Route",description:"Verify Email Route",sidebar_label:"Verify Email Route",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"verify_email_route_verify_email__email_verification_token__get",parameters:[{in:"path",name:"email_verification_token",required:!0,schema:{title:"Email Verification Token",type:"string"}}],responses:{200:{content:{"application/json":{schema:{}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["User Methods"],description:"Verify Email Route",method:"get",path:"/verify_email/{email_verification_token}",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Verify Email Route",description:{type:"text/plain"},url:{path:["verify_email",":email_verification_token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"email_verification_token"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Read User",permalink:"/metro-api-v2/docs/api/read-user-users-username-get"},next:{title:"Index",permalink:"/metro-api-v2/docs/api/index-get"}},f={},k=[{value:"Verify Email Route",id:"verify-email-route",level:2}],v={toc:k};function g(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"verify-email-route"},"Verify Email Route"),(0,l.kt)("p",null,"Verify Email Route"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"email_verification_token",required:!0,schema:{title:"Email Verification Token",type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},"any")))))))),(0,l.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error")),(0,l.kt)("div",null,(0,l.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("span",{className:"badge badge--info"},"anyOf"),(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"string")))),(0,l.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"integer")))))),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(m.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);