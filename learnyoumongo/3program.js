var mongo = require('mongodb').MongoClient;
var ageArg = parseInt(process.argv[2]);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db)
{
      var doc = db.collection('parrots').find({age:{$gt: ageArg}});
      doc.toArray(function(err, documents)
      {
          console.log(documents);
          db.close();
      });


});
