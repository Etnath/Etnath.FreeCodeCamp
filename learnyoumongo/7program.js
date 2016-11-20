var mongo = require('mongodb').MongoClient;
var databaseName = process.argv[2];
var collectionName = process.argv[3];
var idToRemove = process.argv[4];

mongo.connect('mongodb://localhost:27017/' + databaseName, function(err, db)
{
      if (err)
      {
            throw err;
      }
      db.collection(collectionName).remove({_id: idToRemove}, function(err)
      {
            if (err)
            {
                  throw err;
            }
            db.close();
      });
});
