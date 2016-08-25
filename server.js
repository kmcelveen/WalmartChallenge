var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
// var axios = require('axios');
var request = require('request');
var configs = require('./config.js').GIT_API_KEY;

var port = 3000;

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();

//serving our index.html
app.use(express.static(publicPath));

//server/compiler.js runs webpack-dev-server which creates the bundle.js which index.html serves
//the compiler adds some console logs for some extra sugar
//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory
var bundle = require('./server/compiler.js')
bundle()

//express now processes all requests to localhost:8080
//app.all is a special routing method used for loading middleware functions
app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  })
})

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.get('/userproperty/:propertyName', function(req, res){
  var options = {
    url: 'https://api.github.com/search/code?q=' + req.params.propertyName + 'in:file+repo:unicode-cldr/cldr-misc-full&access_token=' + configs,
    headers: {'user-agent': 'node.js'}
  }
  request(options, function(err, response, body){
    if(err){
      console.log(err);
    }
    var githubResponse = JSON.parse(body)
    res.send(githubResponse);
  });
});

app.get('/location/:locale', function(req, res){
    var options = {
      url: 'https://api.github.com/repos/unicode-cldr/cldr-misc-full/contents/main/' + req.params.locale + '/delimiters.json?access_token=' + configs,
      headers: {'user-agent': 'node.js'}
    };

    request(options, function(err, response, body){
        if(err) {
          console.log('this is the error', err);
        }
        console.log('this is the body', body)
        var delimiters = JSON.parse(body)
        var decodeContent = new Buffer(delimiters.content, 'base64');
        res.send(decodeContent.toString());
    });
});

app.listen(port, function () {
  console.log('Server running on port ' + port)
});

