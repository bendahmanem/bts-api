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
