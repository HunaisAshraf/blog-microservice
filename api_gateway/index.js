const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();


app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);
app.use(
  "/api/posts",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);
app.use(
  "/api/comments",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  })
);

const port = 3000;
app.listen(port, () => console.log(`api gateway on port ${port}`));
