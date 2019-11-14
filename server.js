var express =require('express');
var app = express();

//Routes
  app.get('/',function (request,response){
    response.send ('Hello,World');
  }); 

    app.get ('/comments',function(request,response){
        console.log('Get request recieved at/comments');
      });

      app.post  ('/comments',function(request,response){
        console.log('POST recieved at/comments;');
      })
      
app.listen(3000,function(){
  console.log("server is running on port 3000");
});