const express = require("express");
const bodyParser = require("body-parser");

const postRoutes = require("./routes/post");

const app = express();

// place un middleware qui permet de parser le
// contenu du body des requetes entrantes
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("je suis un middleware ");
  req.test = "hello";
  next();
});

app.use((req, res, next) => {
  console.log(req.test);
  next();
});

app.use("/blog", postRoutes);

// donnez l'acces a l'application aux routes qui permettent de gerer les produits
// creez un fichier route et un controller qui correspond

app.listen(3003, () => {
  console.log("App is listening on port 3003");
});
