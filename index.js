const express = require('express');
const app = express();
const route = require('./routes/web')
const path = require('path')

const axios = require('axios')
// const homeworkCSS = path.join(__dirname,'./resources/view/homework-css.html')
const homeworkBlog = path.join(__dirname,'./resources/view/homework-blog.html')

app.get('/',(req,res)=>{
    // res.sendFile(homeworkCSS)
})

app.get('/blog',(req,res)=>{
    // axios.get('https://maqe.github.io/json/authors.json')
    // .then(response => console.log(response.data))
    // .catch(err => console.log(err))
    
    res.sendFile(homeworkBlog)
    res.end();
})

app.listen(3200,(req,res)=>{

})

