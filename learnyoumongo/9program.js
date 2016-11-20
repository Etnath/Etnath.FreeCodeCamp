var mongo = require('mongodb').MongoClient;
var sizeArg = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db)
{
      if (err)
      {
            throw err;
      }
      var prices = db.collection('prices');
      var pricesAggregate = prices.aggregate([
            { $match: { size: sizeArg } },
            {
                  $group:
                  {
                        _id: 'average',
                        average:
                        {
                              $avg: '$price'
                        }
                  }                  
            }]);

      pricesAggregate.toArray(function(err, results)
      {
            if (err)
            {
                  throw err;
            }
            console.log(results[0].average.toFixed(2));
            db.close();
      });
});
