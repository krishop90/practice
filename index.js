const fs = require('fs') // requiring fs mmodule

fs.writeFile("hello.txt" , "how are youu bro ?" , (err) => {
    if(err) console.log(err);
    else console.log("no error");
})

fs.rename("hello.txt" , "hey.txt" , (err) => {
    if(err) console.log(err);
    else console.log("no error");
})

fs.writeFile("hello.txt" , "hello bro how are you ? " , (err) => {
    if(err) console.log(err);
    else console.log("done"); 
})

fs.readFile('./hello.txt' ,'utf8' , (err,data) => {
    if(err) console.log(err);
    else console.log("no error :" , data);
    
})




/*
fs module callback API :

write file
append file
copy file
unlink
rename
readFile

*/
const express = require('express');
const { log } = require('console');
const app = express();

const port = 3000;


app.get('/' , (req,res) =>{
    res.send("Hello krish");
});

app.listen(port, () => {
    console.log("app is started");  
});


const http = require('http');
const server = http.createServer( (req,res) => {
    res.end("ok done");

})
server.listen(8000);



console.log("hello world");