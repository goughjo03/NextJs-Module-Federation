This is an attempt to follow this article: https://medium.com/a-layman/build-micro-frontends-in-nextjs-and-reactjs-with-webpack-5-module-federation-e142ad76f48c

- remote is in directory [mf-example](./mf-example/)
- host is in directory [host](./host/)

to run, you need two terminals

remote: `cd ./mf-example && npm i && npm run dev`

host: `cd ./host && npm i && npm run dev`

visit http://localhost:3000, open network tab, click button and see remote being loaded.
