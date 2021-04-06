var http = require('http')
var sentimentAnazyser = require('./routes/sentimentAnzlyser')
var emotionAnalyzer = require('./routes/emotionAnazyler')
var express = require("express"),
    app = express();


app.use(express.static(__dirname + '/public'));
app.use('/', sentimentAnazyser);
app.use('/emo', emotionAnalyzer);

const server = http.createServer(app);

server.listen(3000,(err)=>{
  console.log("server started at port 3000");
  console.log(err)
});


