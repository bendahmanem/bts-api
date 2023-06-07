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

  // Creates a post in a mongo database

  res.status(201).json({
    message: "Post created successfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};
