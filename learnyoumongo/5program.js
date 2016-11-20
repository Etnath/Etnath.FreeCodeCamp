var mongo = require('mongodb').MongoClient;
var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db)
{
      var object =
      {
          'firstName': firstName,
          'lastName': lastName
      };
            
      db.collection('docs').insert(object, function(err, data)
      {
          console.log(JSON.stringify(object));
          db.close();
      });
});
