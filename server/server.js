const express = require("express");
// 建立 server.js
const app = express();
// 建立 cors
const cors = require("cors");
const { data } = require("react-router-dom");
const PORT = 5000;

app.use(express.json());
const options = { origin: "*" };
app.use(cors(options));

app.get("/api/data", (req, res) => {
  console.log("I am data");
  const data = {
    code: 200,
    message: "成功",
  };
  res.json(data);
});

app.post("/api/data", (req, res) => {
  console.log(req.body);
  const { queryID } = req.body;
  console.log(`queryID ${queryID}`);
  res.json({
    code: 200,
  });
});

app.listen(PORT, () => {
  console.log("Server is running " + PORT);
});

// get 路由， req res 需求是什麼 回傳是什麼
app.get("/api/data", (req, res) => {
  console.log("I am data");
  const data = {
    code: 200,
    message: "success",
  };
  return res.json(data);
});

// 呼叫從前端無法呼叫的 API
// Server 端可呼叫 API
// get 獲取資料 post 新增資料 put 更新資料 delete 刪除資料
