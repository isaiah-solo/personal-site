var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const express = require('express');
const app = express();

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("main");

  app.get('/api/site', (req, res) => {
    dbo.collection("site").findOne({}, function(err, document) {
      if (err) throw err;
      res.send({
        profile: document.profile,
        experience: document.experience,
        skills: document.skills,
      });
      db.close();
    });
  });

  app.listen(8080, () => {
    console.log('Listening on port 8080...');
  });
});
