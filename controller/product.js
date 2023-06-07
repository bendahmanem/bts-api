exports.getProducts = (req, res) => {
  res.status(200).json({
    posts: [
      {
        name: "Sandwich",
        price: "4",
      },
    ],
  });
};

exports.createProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  // Creates a post in a mongo database

  res.status(201).json({
    message: "Product created successfully",
    product: {
      _id: new Date().toISOString(),
      name: name,
      price: price,
    },
  });
};
