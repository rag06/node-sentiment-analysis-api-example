var express = require('express');
var router = express.Router();
var Request = require("request");
var querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
var form = req.body;
var formData = querystring.stringify(form);
var contentLength = formData.length;
console.dir('************************************************************************* \n');
console.dir(formData);

  Request.post({
    "headers": { "content-type":  'application/x-www-form-urlencoded',  'Content-Length': contentLength },
    "url": "http://text-processing.com/api/sentiment/",
    "body": formData
}, (error, response, body) => {
    if(error) {
        return res.json(error);
    }
    res.json(JSON.parse(body));
});

 // res.json({"test": 1});
});
module.exports = router;

