const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
  {
    id: 1233,
    title: "리액트 익히기"
  },
  {
    id: 1234,
    title: "롤 다이아 찍기"
  },
  {
    id: 1230,
    title: "부캠 출석체크 하기"
  }
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todo", (req, res) => {
    setTimeout(() => {
        return res.json(todos);
    }, 1000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));