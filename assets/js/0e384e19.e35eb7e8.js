"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9671],{59881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=a(87462),o=(a(67294),a(3905));const n={},l="Welcome to the Los Angeles Metro User Guide",r={unversionedId:"intro",id:"intro",title:"Welcome to the Los Angeles Metro User Guide",description:"This guide provides an overview of the Los Angeles Metro API, including key features, common tasks, and troubleshooting tips. The developer side of this documentation is geared towards developers of the Los Angeles Metro API.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/metro-api-v2/docs/intro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Documentation Site",permalink:"/metro-api-v2/docs/docs"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use Key Features",id:"how-to-use-key-features",level:2},{value:"Accessing Real-Time Data",id:"accessing-real-time-data",level:3},{value:"How It Works:",id:"how-it-works",level:4},{value:"Example Update Format:",id:"example-update-format",level:4},{value:"Accessing GTFS Data",id:"accessing-gtfs-data",level:3},{value:"Checking Canceled Service Data",id:"checking-canceled-service-data",level:3},{value:"Exploring Static Data",id:"exploring-static-data",level:3},{value:"Examples of Common Tasks",id:"examples-of-common-tasks",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-the-los-angeles-metro-user-guide"},"Welcome to the Los Angeles Metro User Guide"),(0,o.kt)("p",null,"This guide provides an overview of the Los Angeles Metro API, including key features, common tasks, and troubleshooting tips. The developer side of this documentation is geared towards developers of the Los Angeles Metro API."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Metro API provides access for developers to retrieve real-time data, GTFS data, and other information related to the Los Angeles Metro system. By leveraging this API, you can access detailed information about routes, stops, schedules, and live transit updates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real-Time Data:")," Access up-to-the-minute information on bus and train schedules, including delays and cancellations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GTFS Data:")," Explore detailed information about routes, stops, and schedules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Canceled Service Data:")," Stay informed about any service disruptions or cancellations that might affect your journey."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static Data:")," Explore detailed information about routes, stops, and schedules to plan your trip effectively."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other Data:")," Access additional resources like Gopass Schools information.")),(0,o.kt)("h2",{id:"how-to-use-key-features"},"How to Use Key Features"),(0,o.kt)("h3",{id:"accessing-real-time-data"},"Accessing Real-Time Data"),(0,o.kt)("p",null,"To receive real-time updates about vehicles and trips, connect to our WebSocket endpoint. This endpoint is a pass-through for the Swiftly API, providing updates on vehicle positions or trip updates."),(0,o.kt)("h4",{id:"how-it-works"},"How It Works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Connect to the WebSocket:")," Use the endpoint format above to establish a WebSocket connection."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Receive Updates:")," Once connected, you will receive real-time updates every 3 seconds. Updates include information about vehicle positions or trip updates, depending on the ",(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," parameter specified."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Data Format:")," Updates are sent in JSON format, including details such as ",(0,o.kt)("inlineCode",{parentName:"li"},"vehicle_id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"route_code"),", and trip information."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Error Handling:")," If an error occurs while processing updates, an error message will be sent in the format ",(0,o.kt)("inlineCode",{parentName:"li"},'"Error: error_message"'),".")),(0,o.kt)("h4",{id:"example-update-format"},"Example Update Format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "vehicle_id",\n    "vehicle": {\n        "trip": {\n            "route_id": "route_code",\n            ...\n        },\n        ...\n    },\n    "route_code": "route_code",\n    ...\n}\n')),(0,o.kt)("h3",{id:"accessing-gtfs-data"},"Accessing GTFS Data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get All Agencies:")," Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/agencies")," endpoint to view a list of all available agencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Agency Routes:")," Access ",(0,o.kt)("inlineCode",{parentName:"li"},"/routes/{agency_id}")," to view all routes for a specific agency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Route Stops:")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/stops/{agency_id}/{route_code}")," to view all stops for a specific route."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Stop Times:")," Access ",(0,o.kt)("inlineCode",{parentName:"li"},"/stop_times/{agency_id}/{route_code}")," to view stop times for a specific route."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Trips:")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/trips/{agency_id}/{trip_id}")," to view details about a specific trip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get All Trips:")," Access ",(0,o.kt)("inlineCode",{parentName:"li"},"/trips/{agency_id}")," to view all trips for a specific agency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get All Routes:")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/routes/{agency_id}")," to view all routes for a specific agency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get All Stops:")," Access ",(0,o.kt)("inlineCode",{parentName:"li"},"/stops/{agency_id}")," to view all stops for a specific agency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get All Stop Times:")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/stop_times/{agency_id}")," to view all stop times for a specific agency.")),(0,o.kt)("h3",{id:"checking-canceled-service-data"},"Checking Canceled Service Data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Canceled Trip Summary:")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/canceled_service_summary")," to view a summary of all canceled trips."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get Canceled Trip:")," To find details about canceled trips for a specific line, use ",(0,o.kt)("inlineCode",{parentName:"li"},"/canceled_service/line/{line}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View All Canceled Trips:")," Access ",(0,o.kt)("inlineCode",{parentName:"li"},"/canceled_service/all")," to see all canceled trips.")),(0,o.kt)("h3",{id:"exploring-static-data"},"Exploring Static Data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route and Stop Information:")," Use endpoints like ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/route_stops/{route_code}")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/stops/{stop_id}")," to get information about routes and stops."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schedule and Trip Details:")," Access detailed schedule information with endpoints such as ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/stop_times/route_code/{route_code}")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/trips/{trip_id}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route Overview:")," Get an overview of routes with ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/route_overview")," or detailed information for a specific route with ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/route_overview/{route_code}"),".")),(0,o.kt)("h2",{id:"examples-of-common-tasks"},"Examples of Common Tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How to Check for Service Alerts:")," Use the canceled service data endpoints to check for any disruptions or cancellations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How to Find Real-Time Schedule Information:")," Utilize the real-time data endpoints to get the latest schedule updates for your route.")),(0,o.kt)("h2",{id:"troubleshooting-tips"},"Troubleshooting Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue: The schedule seems outdated.")," Solution: Ensure you're accessing the real-time data endpoints for the most current information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue: Can't find my route.")," Solution: Double-check the route code or use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/{agency_id}/routes")," endpoint to search for all available routes.")))}u.isMDXComponent=!0}}]);