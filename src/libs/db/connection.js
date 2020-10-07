const mongoose = require('mongoose');
var db;
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = function conection() {
  if (!db) {
    db = mongoose.createConnection('mongodb://localhost/crud-example', { useNewUrlParser : true });
  }
  return db;
}
