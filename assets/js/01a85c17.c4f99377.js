"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4013],{39058:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(67294),n=a(86010),r=a(40025),s=a(87524),c=a(39960),m=a(95999);const i="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",E="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function b(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:E,activeClassName:g},e.title)))))))}var p=a(13102);function k(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return l.createElement(p.Zo,{component:k,props:e})}function _(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(N,{sidebar:t}):l.createElement(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:a,children:s,...c}=e,m=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},20472:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(67294),n=a(86010),r=a(35155),s=a(10833),c=a(35281),m=a(39058),i=a(13008);const o="tag_Nnez";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(i.Z,e))))),l.createElement("hr",null))}function d(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var E=a(90197);function g(e){let{tags:t,sidebar:a}=e;const i=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:i}),l.createElement(E.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("h1",null,i),l.createElement(d,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",m="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,i?m:c)},a,i&&l.createElement("span",null,i))}}}]);