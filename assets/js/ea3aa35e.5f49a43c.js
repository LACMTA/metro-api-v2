"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5074],{43428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),l=a(94891),n=(a(75190),a(47507)),o=a(24310),p=a(63303),m=(a(75035),a(85162));const d={id:"create-user-users-post",title:"Create User",description:"Create User",sidebar_label:"Create User",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create_user_users__post",requestBody:{content:{"application/json":{schema:{properties:{email:{title:"Email",type:"string"},password:{title:"Password",type:"string"},username:{title:"Username",type:"string"}},required:["username","email","password"],title:"UserCreate",type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{email:{title:"Email",type:"string"},id:{title:"Id",type:"integer"},is_active:{title:"Is Active",type:"boolean"},username:{title:"Username",type:"string"}},required:["username","email","id","is_active"],title:"User",type:"object"}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["User Methods"],description:"Create User",method:"post",path:"/users/",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},jsonRequestBodyExample:{email:"string",password:"string",username:"string"},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Create User",description:{type:"text/plain"},url:{path:["users",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api/fastapi",custom_edit_url:null},c=void 0,u={unversionedId:"api/create-user-users-post",id:"api/create-user-users-post",title:"Create User",description:"Create User",source:"@site/docs/api/create-user-users-post.api.mdx",sourceDirName:"api",slug:"/api/create-user-users-post",permalink:"/metro-api-v2/docs/api/create-user-users-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-user-users-post",title:"Create User",description:"Create User",sidebar_label:"Create User",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create_user_users__post",requestBody:{content:{"application/json":{schema:{properties:{email:{title:"Email",type:"string"},password:{title:"Password",type:"string"},username:{title:"Username",type:"string"}},required:["username","email","password"],title:"UserCreate",type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{email:{title:"Email",type:"string"},id:{title:"Id",type:"integer"},is_active:{title:"Is Active",type:"boolean"},username:{title:"Username",type:"string"}},required:["username","email","id","is_active"],title:"User",type:"object"}}},description:"Successful Response"},422:{content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},title:"Location",type:"array"},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}},required:["loc","msg","type"],title:"ValidationError",type:"object"},title:"Detail",type:"array"}},title:"HTTPValidationError",type:"object"}}},description:"Validation Error"}},tags:["User Methods"],description:"Create User",method:"post",path:"/users/",servers:[{url:"https://api.metro.net"}],securitySchemes:{OAuth2PasswordBearer:{flows:{password:{scopes:{},tokenUrl:"token"}},type:"oauth2"}},jsonRequestBodyExample:{email:"string",password:"string",username:"string"},info:{title:"FastAPI",version:"0.1.0"},postman:{name:"Create User",description:{type:"text/plain"},url:{path:["users",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api/fastapi",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Login For Access Token",permalink:"/metro-api-v2/docs/api/login-for-access-token-token-post"},next:{title:"Read User",permalink:"/metro-api-v2/docs/api/read-user-users-username-get"}},y={},g=[{value:"Create User",id:"create-user",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-user"},"Create User"),(0,i.kt)("p",null,"Create User"),(0,i.kt)(l.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"email",required:!0,schemaName:"Email",qualifierMessage:void 0,schema:{title:"Email",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"password",required:!0,schemaName:"Password",qualifierMessage:void 0,schema:{title:"Password",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!0,schemaName:"Username",qualifierMessage:void 0,schema:{title:"Username",type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"email",required:!0,schemaName:"Email",qualifierMessage:void 0,schema:{title:"Email",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"integer"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"is_active",required:!0,schemaName:"Is Active",qualifierMessage:void 0,schema:{title:"Is Active",type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"username",required:!0,schemaName:"Username",qualifierMessage:void 0,schema:{title:"Username",type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "email": "string",\n  "id": 0,\n  "is_active": true,\n  "username": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Validation Error")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"detail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"loc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)("li",null,(0,i.kt)("span",{className:"badge badge--info"},"anyOf"),(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"integer")))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);