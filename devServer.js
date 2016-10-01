var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var template = require('./html.template');

if ((parseInt(process.versions.node[0]) == 0) && (parseInt(process.versions.node.slice(2)) <= 12)) {
  console.log(
    'Node.js version ' + process.versions.node + ' too old; please upgrade to Node.js 4.0 or later.'
  );
  process.exit();
}

var app = express();
var compiler = webpack(config);
/*
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
*/
app.get('/k/:Su', function (req, res) {
  console.log(req.params);
  res.send(template.render(req.params));
});

app.get('/*', function (req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.send(template.render(req.params));
});

//app.listen(3000, 'localhost', function (err) {
app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
