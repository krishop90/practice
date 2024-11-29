//express is npm package 
// express is framework
// manages everything from receiving request to sending the response
//connecting database with server

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const express = require('express');
const { LogBox } = require('react-native-web');
const app = express();

app.use((req,res,next) => {
    console.log("middleware is running");
    next();
});

app.get('/' , (req,res) => {
    res.send("hello world !!");
})
app.get('/profile' , (req,res) => {
    return next(new Error("something broke"));
})

app.use((err,req , res,next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong');
})

app.listen(3000)


//MiddleWare
