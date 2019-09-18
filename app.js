const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const New = require('./models/new');

mongoose.connect('mongodb://127.0.0.1:27017',()=>console.log("connected"));

app.get('/',(req,res) =>{
res.send('Hello world!!');
});

app.get('/new',(req,res)=>{
    New.find().then((post)=>{
        if(!post)res.status(404).json({post: "not found!"});
        res.json(post);
    })
});

app.post('/upload',(req,res)=>{
    console.log(req.body)
    const {title,url} = req.body;
    console.log(title, url)
    const news = new News({
        title : title,
        url : url
    })
});

PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));