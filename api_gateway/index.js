const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://auth:3001",
    changeOrigin: true,
  })
);
app.use(
  "/api/posts",
  createProxyMiddleware({
    target: "http://posts:3002",
    changeOrigin: true,
  })
);
app.use(
  "/api/comments",
  createProxyMiddleware({
    target: "http://comments:3003",
    changeOrigin: true,
  })
);

const port = 3000;
app.listen(port, () => console.log(`api gateway on port ${port}`));
