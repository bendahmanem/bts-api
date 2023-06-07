const express = require("express");
const bodyParser = require("body-parser");

const postRoutes = require("./routes/post");
const productRoutes = require("./routes/product");

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

// GET: http://localhost:3003/blog/posts
// POST: http://localhost:3003/blog/post
app.use("/blog", postRoutes);

// GET: http://localhost:3003/products
// POST: http://localhost:3003/product
app.use("/", productRoutes);

// donnez l'acces a l'application aux routes qui permettent de gerer les produits
// creez un fichier route et un controller qui correspond

app.listen(3003, () => {
  console.log("App is listening on port 3003");
});
