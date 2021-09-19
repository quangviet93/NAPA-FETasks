const User = require('../models/User');


// tạo controller.
exports.getUser = (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  // res.json({
  //   username: username,
  //   password: password
  // })
  User.findOne({ username: username }, (err, user) => {
    res.json(user);
  })
};

exports.register = (req, res) => {
  // móc ra username,password từ req.body.
  const { username, password } = req.body;

  // kiểm tra request gửi đến.
  if (!username || !password) {

    return res.status(400).json({ success: false, message: 'Missing username or password' });
  }
  User.findOne({ username: username })
    .then(user => {

      if (user) {
        return res.status(401).json({ success: false, message: 'Username already used' });
      }
      const newUser = new User({ username, password });
      newUser.save()
      res.status(200).json({ success: true, message: 'user created success' })
    })
    .catch(err => {
      res.status(500).json({ success: false, message: 'Internal server error' })
    });
};

exports.login = (req, res) => {
  // móc ra username,password từ req.body.
  const { username, password } = req.body;
  // kiểm tra request gửi đến.
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing username or password' });
  }
  User.findOne({ username: username, password: password })
    .then(user => {
      if (user) {
        return res.status(200).json({ success: true, message: 'login success' });
      }
      return res.status(400).json({ success: false, message: 'Username or Password false' });
    })
    .catch(err => {
      res.status(500).json({ success: false, message: 'Internal server error' })
    });
}

