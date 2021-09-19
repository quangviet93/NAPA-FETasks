const Post = require('../models/Post');

exports.getAllPost = (req, res, next) => {

  Post.find({})
    .then((posts) => res.status(200).json(posts))
    .catch(next);
};

// Add Post
exports.getPost = (req, res) => {
  const id = req.params.id;

  Post.findOne({ _id: id }, (err, post) => {
    res.json(post);
  })
}
// Update Post
exports.updatePost = (req, res, next) => {
  const { title, description, url, status } = req.body;
  console.log(req.body)
  const id = req.params.id;
  console.log('id', id)
  const updatePost = {
    title: title,
    description: description || '',
    url: url,
    status: status || 'TO LEARNING',
  }
  Post.findOneAndUpdate({ _id: id }, updatePost)
    .then(() => res.status(200).json({ success: true, message: 'Update success' }))
    .catch(next);
};

// Delete Post
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  Post.deleteOne({ _id: id })
    .then(() => res.status(200).json({ success: true, message: 'Delete success' }))
    .catch(next);
};

// Create Post
exports.addPost = (req, res) => {
  const { title, description, url, status } = req.body;
  console.log(req.body)
  Post.findOne({ title: title })
    .then(post => {

      if (post) {
        return res.status(400).json({ success: false, message: 'Title in required' });
      }
      const newPost = new Post({
        title: title,
        description: description,
        url: url.startsWith('http://') ? url : `http://${url}`,
        status: status || 'LEARNING',
      });
      newPost.save()
      res.status(200).json({ success: true, message: 'Happy created post success', post: newPost })
    })
    .catch(err => {
      res.status(500).json({ success: false, message: 'Internal server error' })
    });
};

