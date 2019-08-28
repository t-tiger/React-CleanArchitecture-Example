const express = require("express");
const app = express();

app.get("/articles", (req, res) => {
  res.setHeader("content-type", "application/json");
  res.send({
    articles: Array.from({ length: 100 }).map((_, i) => ({
      id: i + 1,
      name: `post-${i + 1}`,
      author: {
        id: i + 1,
        name: `author-${i + 1}`
      },
      createdAt: new Date("2019-01-01")
    }))
  });
});
app.listen(3000);
