const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  'mongodb+srv://denies:WX1dkJotHMfz6hgn@main-database.t1g2w.mongodb.net/main-database?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

module.exports = mongoose;
