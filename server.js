var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articletwo={
    title: 'Article two | samar iqbal',
    heading: 'Article two',
    date: '21 dec 2017',
    content:
            `<p>
                  this is my second article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and...
            </p>
            <p>
                 this is my second article..and... this is my firt article..
            </p>
            <p>
                 this is my second article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and... this is my firt article..and...
            </p>`
};

function createTempelate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTempelate=`<html>
    <head>
        <title>
            ${title}
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <h3>
       ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
         ${content}
        </div>
    
    </div>
    </body>
</html>
`;
return htmlTempelate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function (req,res){
  res.send(createTempelate(articletwo));
});


app.get('/article-three',function (req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
