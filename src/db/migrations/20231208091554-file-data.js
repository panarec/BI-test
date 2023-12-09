var dbm;
var type;
var fs = require('fs');
var path = require('path');

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options) {
  dbm = options.dbmigrate;
  type = dbm.datatype;
};

exports.up = function (db, callback) {
  var filePath = path.join(__dirname + '/sqls/20231208091554-file-data-up.sql');
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (err) return console.log(err);
    db.runSql(data, function (err) {
      if (err) return console.log(err);
      callback();
    });
  });
};

exports.down = function (db, callback) {
  var filePath = path.join(
    __dirname + '/sqls/20231208091554-file-data-down.sql',
  );
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (err) return console.log(err);
    db.runSql(data, function (err) {
      if (err) return console.log(err);
      callback();
    });
  });
};
