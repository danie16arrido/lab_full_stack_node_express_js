var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function () {
  this.url = 'mongodb://localhost:27017/bucket_list';
  this.countries = [];
};

CountryQuery.prototype = {
  all: function ( onQueryFinished ) {
    console.log("in query");
    MongoClient.connect(this.url, function ( err, db ) {
      if(db){
        var bucket = db.collection('countries');
        bucket.find().toArray(function ( err, docs ) {
          if(docs){
            onQueryFinished( docs );
          }
        });
      }
    });
  }
};

module.exports = CountryQuery;