const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
  {
    id: 1,
    title: "React Hooks 익히기"
  },
  {
    id: 2,
    title: "GraphQL 익히기"
  },
  {
    id: 3,
    title: "Apollo 익히기"
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