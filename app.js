const express = require("express");
const app = express();
const route = require("./routes/web");
const path = require("path");
const ejs = require("ejs");
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");
const $ = require("jquery")(dom.window);

const axios = require("axios");
const { response } = require("express");
// const homeworkCSS = path.join(__dirname,'./resources/view/homework-css.html')
app.set("views", path.join(__dirname, "./resources/views"));
app.set("Views Engine", "ejs");
app.use(route);
app.use(express.static(path.join(__dirname, "public")));
const homeworkBlog = path.join(__dirname, "./resources/view/homework-blog.ejs");

// app.get('/',(req,res)=>{
//     // res.sendFile(homeworkCSS)
// })

app.get("/blog", (req, res) => {
    const $card = $("#card-forum .card").clone();
    const authors = axios.get("https://maqe.github.io/json/authors.json");
    const posts = axios.get("https://maqe.github.io/json/posts.json");
    $("#card-forum").html("");
    posts.then((resItem) => {
        const { author_id, title, body, image_url, created_at } = resItem;
    });
    authors
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));

    res.render("homework-blog.ejs");
});

app.listen(8080, () => {
    console.log("Run server port 8080");
});
