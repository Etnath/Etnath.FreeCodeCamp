var mongo = require('mongodb').MongoClient;
var databaseName = process.argv[2];

mongo.connect('mongodb://localhost:27017/' + databaseName, function(err, db)
{
      db.collection('users').update({username: "tinatime"},{$set:{age: 40}}, function(err, data)
      {
            db.close();
      });
});
