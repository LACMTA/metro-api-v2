"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2306],{344:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"websocket-to-me","metadata":{"permalink":"/metro-api-v2/blog/websocket-to-me","source":"@site/blog/2023-03-29.mdx","title":"WebSocket to Me!","description":"Hola Metro A-PIoneers! Today we are launching 2.1.21 of our API which is a minor version release that enables websockets!","date":"2023-03-29T00:00:00.000Z","formattedDate":"March 29, 2023","tags":[{"label":"api","permalink":"/metro-api-v2/blog/tags/api"},{"label":"websockets","permalink":"/metro-api-v2/blog/tags/websockets"},{"label":"update","permalink":"/metro-api-v2/blog/tags/update"}],"readingTime":1.99,"hasTruncateMarker":true,"authors":[{"name":"Albert Kochaphum","title":"API Guy","url":"https://github.com/albertkun","imageURL":"https://avatars.githubusercontent.com/u/8574425?v=4","key":"albert"}],"frontMatter":{"slug":"websocket-to-me","title":"WebSocket to Me!","authors":["albert"],"tags":["api","websockets","update"]},"nextItem":{"title":"Hello World!","permalink":"/metro-api-v2/blog/hello-world"}},"content":"Hola Metro A-PIoneers! Today we are launching **2.1.21** of our API which is a minor version release that enables websockets!\\n\\nCurrently, every 10 seconds the `live/trip_detail` websocket returns trip details for a route, alongside headsign and current stop information. \\n\\n\x3c!--truncate--\x3e\\n\\nYou can find the URL of the websockets here:\\n\\n`wss://api.metro.net/{AGENCY_ID}/live/trip_detail/route_code/{ROUTE_CODE}?geojson={BOOLEAN}`\\n\\n- `{AGENCY_ID}` can either be `LACMTA` for bus or `LACMTA_Rail` for LACMTA_Rail\\n- `{ROUTE_CODE}` can be a line, like the `720` or `801`\\n- `{BOOLEAN}` for geojson value of `True` is ONLY supported right now.\\n\\nA working example WebSocket would be:\\n- `wss://api.metro.net/LACMTA/live/trip_detail/route_code/720?geojson=True`\\n\\nYou can check this page to play around:\\n- https://api.metro.net/websocket_test\\n\\n\\nFeel free to request to see what else you\'d like to see on the GitHub [issues board](https://github.com/LACMTA/metro-api-v2/issues)!\\n\\n### The devil is in the (WebSocket) details\\n\\nAnd gosh, were websockets a pain to implement!!! While FastAPI has good support for websockets, our API was not meant for asynchronous calls.\\n\\nWhy did we need these asynchronous calls? Well, the data we wanted to send through websockets was live GTFS Real Time data that was also joined to the GTFS Static data.\\n\\n## Technology Stack\\n\\nThe API needed to be basically re-done for async calls through `asyncpg` with `aysncio` and new updated `sqlalchemy` commands.\\n\\n### asyncpg\\nWe needed to redo the database connection to listen for live updates, so we connected using asyncpg.\\n\\n``` python\\nfrom sqlalchemy.ext.asyncio import create_async_engine, AsyncSession\\n```\\n\\nWe then re-did our SqlAlchemy engine to connect using the async url: \\n``` python\\nasync_engine = create_async_engine(create_async_uri(Config.DB_URI), echo=False)\\nasync_session = sessionmaker(async_engine, expire_on_commit=False, class_=AsyncSession)\\n```\\n\\nFinally we created a new function to connect to the database:\\n``` python\\n\\nasync def get_async_db():\\n    async with async_session() as db:\\n        try:\\n            yield db\\n        finally:\\n            await async_engine.dispose()\\n```\\nPhew!\\n\\n### Asynchronously querying the data\\nNow that we were connected to the database, we had to re-do the queries!\\n\\nFor async calls, SqlAlchemy uses `.select` instead of `.query` so our code went from:\\n\\n``` python\\n    the_query = db.query(gtfs_models.VehiclePosition).filter(gtfs_models.VehiclePosition.agency_id == agency_id).all()\\n```\\n\\nto:\\n\\n``` python\\nthe_query = await session.execute(select(gtfs_models.VehiclePosition).where(gtfs_models.VehiclePosition.route_code == route_code,gtfs_models.VehiclePosition.agency_id == agency_id))\\n```\\n\\nAnd the results needed to be converted to `scalars`:\\n```\\n    for row in the_query.scalars().all():\\n        print(row)\\n```\\n\\nAll the code is in the API\'s `database.py`,`main.py`, `crud.py` here: https://github.com/LACMTA/metro-api-v2/tree/main/fastapi/app.\\n\\n## Conclusion\\n\\nAfter being pummeled by websockets for the past couple of weeks, all I can say is that it\'s been pretty painful. \\n\\nI just can\'t wait until someone comes up with `webmittens` next."},{"id":"hello-world","metadata":{"permalink":"/metro-api-v2/blog/hello-world","source":"@site/blog/2023-03-21.mdx","title":"Hello World!","description":"We\'ll be making regular blog updates as we work on the API and the documentation site. Our team is small but we\'ve got big dreams and a desire to make our data more open and accessible.","date":"2023-03-21T00:00:00.000Z","formattedDate":"March 21, 2023","tags":[{"label":"general","permalink":"/metro-api-v2/blog/tags/general"}],"readingTime":0.415,"hasTruncateMarker":false,"authors":[{"name":"Nina Kin","title":"Head Digital Honcho","url":"https://github.com/matikin9","imageURL":"https://avatars.githubusercontent.com/u/1873072?v=4","key":"nina"}],"frontMatter":{"slug":"hello-world","title":"Hello World!","authors":["nina"],"tags":["general"]},"prevItem":{"title":"WebSocket to Me!","permalink":"/metro-api-v2/blog/websocket-to-me"},"nextItem":{"title":"API 2.0 Documentation Launch \ud83d\ude80","permalink":"/metro-api-v2/blog/api-documentation-launch"}},"content":"We\'ll be making regular blog updates as we work on the API and the documentation site. Our team is small but we\'ve got big dreams and a desire to make our data more open and accessible.\\r\\n\\r\\nKeep an eye on this space as we post about changes, tutorials, etc.  It\'s as much for your information as it is to keep ourselves accountable.  \\r\\n\\r\\nQuestions/comments are welcomed on our GitHub repository [discussions board](https://github.com/LACMTA/metro-api-v2/discussions).\\r\\n\\r\\nWe\'d love to hear your about any [bugs or issues](https://github.com/LACMTA/metro-api-v2/issues) as well!"},{"id":"api-documentation-launch","metadata":{"permalink":"/metro-api-v2/blog/api-documentation-launch","source":"@site/blog/2023-03-20.mdx","title":"API 2.0 Documentation Launch \ud83d\ude80","description":"Metro API 2.0 has launched into BETA, which means we are scaling up for wide spread usage. If you have any issues, please head on over to the GitHub Issue\'s board and add an issue","date":"2023-03-20T00:00:00.000Z","formattedDate":"March 20, 2023","tags":[{"label":"documentation","permalink":"/metro-api-v2/blog/tags/documentation"},{"label":"api","permalink":"/metro-api-v2/blog/tags/api"}],"readingTime":0.565,"hasTruncateMarker":false,"authors":[{"name":"Albert Kochaphum","title":"API Guy","url":"https://github.com/albertkun","imageURL":"https://avatars.githubusercontent.com/u/8574425?v=4","key":"albert"}],"frontMatter":{"slug":"api-documentation-launch","title":"API 2.0 Documentation Launch \ud83d\ude80","authors":["albert"],"tags":["documentation","api"]},"prevItem":{"title":"Hello World!","permalink":"/metro-api-v2/blog/hello-world"},"nextItem":{"title":"Long Blog Post","permalink":"/metro-api-v2/blog/long-blog-post"}},"content":"Metro API 2.0 has launched into BETA, which means we are scaling up for wide spread usage. If you have any issues, please head on over to the GitHub Issue\'s board and add an [issue](https://github.com/LACMTA/metro-api-v2/issues) \\n\\n## API Architecture\\n\\nThe API is composed of the following:\\n\\n1. `data-loading-service` - the backend **docker** container that routinely executes Python scripts and [pandas](https://pandas.pydata.org/) to load data into the PostgreSQL database.\\n2. `api` - the frontend **docker** container that hosts the connections to the database using [fastapi](https://fastapi.tiangolo.com/).\\n3. `documentation` - a static generated website built with [docusaurus](https://docusaurus.io/).\\n\\n\\n```mermaid\\ngraph TD;\\n    id1(Data Loading Service)--\x3eAPI;\\n    API--\x3eDocumentation;\\n```\\n\\n### Data\\n put into a PostgreSQL database  \\n#### Data Sources\\n- GTFS Data"},{"id":"long-blog-post","metadata":{"permalink":"/metro-api-v2/blog/long-blog-post","source":"@site/blog/2023-03-19-long-blog-post.md","title":"Long Blog Post","description":"Welcome to the dev blog for Metro\'s API!","date":"2023-03-19T00:00:00.000Z","formattedDate":"March 19, 2023","tags":[{"label":"documentation","permalink":"/metro-api-v2/blog/tags/documentation"}],"readingTime":0.065,"hasTruncateMarker":true,"authors":[{"name":"Nina Kin","title":"Head Digital Honcho","url":"https://github.com/matikin9","imageURL":"https://avatars.githubusercontent.com/u/1873072?v=4","key":"nina"},{"name":"Albert Kochaphum","title":"API Guy","url":"https://github.com/albertkun","imageURL":"https://avatars.githubusercontent.com/u/8574425?v=4","key":"albert"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":["nina","albert"],"tags":["documentation"]},"prevItem":{"title":"API 2.0 Documentation Launch \ud83d\ude80","permalink":"/metro-api-v2/blog/api-documentation-launch"},"nextItem":{"title":"MDX Blog Post","permalink":"/metro-api-v2/blog/mdx-blog-post"}},"content":"Welcome to the dev blog for Metro\'s API!\\n\\n\x3c!--truncate--\x3e\\n\\nMore content to come!"},{"id":"mdx-blog-post","metadata":{"permalink":"/metro-api-v2/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/metro-api-v2/blog/tags/docusaurus"}],"readingTime":0.17,"hasTruncateMarker":false,"authors":[{"name":"Nina Kin","title":"Head Digital Honcho","url":"https://github.com/matikin9","imageURL":"https://avatars.githubusercontent.com/u/1873072?v=4","key":"nina"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["nina"],"tags":["docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/metro-api-v2/blog/long-blog-post"}},"content":"Blog posts support [Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"}]}')}}]);