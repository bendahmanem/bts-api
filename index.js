const express = require("express");

const postRoutes = require("./routes/post");

const app = express();

app.use((req, res, next) => {
  console.log("je suis un middleware ");
  req.test = "hello";
  //next();
});

app.use((req, res, next) => {
  console.log(req.test);
  next();
});

app.use("/blog", postRoutes);

app.listen(3003, () => {
  console.log("App is listening on port 3003");
});
