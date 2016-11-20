var mongo = require('mongodb').MongoClient;
var ageArg = parseInt(process.argv[2]);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db)
{
      if (err)
      {
            throw err;
      }
      db.collection('parrots').count({age: {$gt: ageArg}}, function(err, count)
      {
            if (err)
            {
                  throw err;
            }
            console.log(count);
            db.close();
      });
});
