"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5289],{14780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={slug:"websocket-to-me",title:"WebSocket to Me!",authors:["albert"],tags:["api","websockets","update"]},s=void 0,i={permalink:"/metro-api-v2/blog/websocket-to-me",source:"@site/blog/2023-03-29.mdx",title:"WebSocket to Me!",description:"Hola Metro A-PIoneers! Today we are launching 2.1.21 of our API which is a minor version release that enables websockets!",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"api",permalink:"/metro-api-v2/blog/tags/api"},{label:"websockets",permalink:"/metro-api-v2/blog/tags/websockets"},{label:"update",permalink:"/metro-api-v2/blog/tags/update"}],readingTime:1.99,hasTruncateMarker:!0,authors:[{name:"Albert Kochaphum",title:"API Guy",url:"https://github.com/albertkun",imageURL:"https://avatars.githubusercontent.com/u/8574425?v=4",key:"albert"}],frontMatter:{slug:"websocket-to-me",title:"WebSocket to Me!",authors:["albert"],tags:["api","websockets","update"]},nextItem:{title:"Hello World!",permalink:"/metro-api-v2/blog/hello-world"}},r={authorsImageUrls:[void 0]},p=[{value:"The devil is in the (WebSocket) details",id:"the-devil-is-in-the-websocket-details",level:3},{value:"Technology Stack",id:"technology-stack",level:2},{value:"asyncpg",id:"asyncpg",level:3},{value:"Asynchronously querying the data",id:"asynchronously-querying-the-data",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hola Metro A-PIoneers! Today we are launching ",(0,o.kt)("strong",{parentName:"p"},"2.1.21")," of our API which is a minor version release that enables websockets!"),(0,o.kt)("p",null,"Currently, every 10 seconds the ",(0,o.kt)("inlineCode",{parentName:"p"},"live/trip_detail")," websocket returns trip details for a route, alongside headsign and current stop information. "),(0,o.kt)("p",null,"You can find the URL of the websockets here:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wss://api.metro.net/{AGENCY_ID}/live/trip_detail/route_code/{ROUTE_CODE}?geojson={BOOLEAN}")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{AGENCY_ID}")," can either be ",(0,o.kt)("inlineCode",{parentName:"li"},"LACMTA")," for bus or ",(0,o.kt)("inlineCode",{parentName:"li"},"LACMTA_Rail")," for LACMTA_Rail"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ROUTE_CODE}")," can be a line, like the ",(0,o.kt)("inlineCode",{parentName:"li"},"720")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"801")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{BOOLEAN}")," for geojson value of ",(0,o.kt)("inlineCode",{parentName:"li"},"True")," is ONLY supported right now.")),(0,o.kt)("p",null,"A working example WebSocket would be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wss://api.metro.net/LACMTA/live/trip_detail/route_code/720?geojson=True"))),(0,o.kt)("p",null,"You can check this page to play around:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.metro.net/websocket_test"},"https://api.metro.net/websocket_test"))),(0,o.kt)("p",null,"Feel free to request to see what else you'd like to see on the GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LACMTA/metro-api-v2/issues"},"issues board"),"!"),(0,o.kt)("h3",{id:"the-devil-is-in-the-websocket-details"},"The devil is in the (WebSocket) details"),(0,o.kt)("p",null,"And gosh, were websockets a pain to implement!!! While FastAPI has good support for websockets, our API was not meant for asynchronous calls."),(0,o.kt)("p",null,"Why did we need these asynchronous calls? Well, the data we wanted to send through websockets was live GTFS Real Time data that was also joined to the GTFS Static data."),(0,o.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,o.kt)("p",null,"The API needed to be basically re-done for async calls through ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncpg")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"aysncio")," and new updated ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlalchemy")," commands."),(0,o.kt)("h3",{id:"asyncpg"},"asyncpg"),(0,o.kt)("p",null,"We needed to redo the database connection to listen for live updates, so we connected using asyncpg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession\n")),(0,o.kt)("p",null,"We then re-did our SqlAlchemy engine to connect using the async url: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"async_engine = create_async_engine(create_async_uri(Config.API_DB_URI), echo=False)\nasync_session = sessionmaker(async_engine, expire_on_commit=False, class_=AsyncSession)\n")),(0,o.kt)("p",null,"Finally we created a new function to connect to the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nasync def get_async_db():\n    async with async_session() as db:\n        try:\n            yield db\n        finally:\n            await async_engine.dispose()\n")),(0,o.kt)("p",null,"Phew!"),(0,o.kt)("h3",{id:"asynchronously-querying-the-data"},"Asynchronously querying the data"),(0,o.kt)("p",null,"Now that we were connected to the database, we had to re-do the queries!"),(0,o.kt)("p",null,"For async calls, SqlAlchemy uses ",(0,o.kt)("inlineCode",{parentName:"p"},".select")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".query")," so our code went from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    the_query = db.query(gtfs_models.VehiclePosition).filter(gtfs_models.VehiclePosition.agency_id == agency_id).all()\n")),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"the_query = await session.execute(select(gtfs_models.VehiclePosition).where(gtfs_models.VehiclePosition.route_code == route_code,gtfs_models.VehiclePosition.agency_id == agency_id))\n")),(0,o.kt)("p",null,"And the results needed to be converted to ",(0,o.kt)("inlineCode",{parentName:"p"},"scalars"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    for row in the_query.scalars().all():\n        print(row)\n")),(0,o.kt)("p",null,"All the code is in the API's ",(0,o.kt)("inlineCode",{parentName:"p"},"database.py"),",",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"crud.py")," here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LACMTA/metro-api-v2/tree/main/fastapi/app"},"https://github.com/LACMTA/metro-api-v2/tree/main/fastapi/app"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"After being pummeled by websockets for the past couple of weeks, all I can say is that it's been pretty painful. "),(0,o.kt)("p",null,"I just can't wait until someone comes up with ",(0,o.kt)("inlineCode",{parentName:"p"},"webmittens")," next."))}d.isMDXComponent=!0}}]);