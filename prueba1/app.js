var express =require("express");
var app=express();


app.get("/Welcome",function(req,res)
{
    res.send("hola")

});

app.get("/bay",function(req,res)
{
    res.send("adios")

});



app.listen(100);
