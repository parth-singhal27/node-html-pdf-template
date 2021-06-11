var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./example.html', 'utf8');
console.log(html);
var options = { format: 'A4' };

pdf.create(html, options).toFile('./example.pdf', function (err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('example.html', function (err, data) {
//     // console.log(data);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);