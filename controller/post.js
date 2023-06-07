const Post = require("../models/post");

exports.getPosts = (req, res) => {
  res.status(200).json({
    posts: [
      {
        title: "First post",
        content: "This is the first post",
      },
    ],
  });
};

exports.createPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  // TODO: ajouter des controles...
  const post = new Post({
    title: title,
    content: content,
  });

  post
    .save()

    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => {
      console.log("error: ", error);
      // envoyer une reponse appropriee
    });
};
