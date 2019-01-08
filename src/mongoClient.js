var MongoClient = require("mongodb").MongoClient;
/*
Export url as a Environment Variable.


 */
var envUrl = process.env.MONGODB_DB_URL_ADMIN;
MongoClient.connect(
  envUrl,
  function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  }
);
