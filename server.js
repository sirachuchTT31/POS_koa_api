const Koa = require('koa')
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const server = new Koa()
const http = require('http');
const port = 5000;

server.use(parser()).use(cors()).listen(port, () => {
    console.log(`🚀 Server Listen localhost:${port}🚀`);
})

