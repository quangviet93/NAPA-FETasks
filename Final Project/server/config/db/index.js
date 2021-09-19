const mongoose = require('mongoose');



// hàm kết nối database.
async function connect() {

  try {
    await mongoose.connect('mongodb://localhost:27017/todolist', {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log('connect thanh cong');
  } catch (error) {
    console.log('connect error');
  }
};


module.exports = { connect };