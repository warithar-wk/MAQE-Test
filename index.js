const express = require("express");
const app = express();
const route = require("./routes/web");
const path = require("path");
const ejs = require("ejs");

const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");
const $ = require("jquery")(dom.window);

const axios = require("axios");
// const homeworkCSS = path.join(__dirname,'./resources/view/homework-css.html')

const homeworkBlog = path.join(
    __dirname,
    "./resources/views/homework-blog.html"
);

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

    res.render(homeworkBlog);
});

app.listen(8080, () => {
    console.log("Run server port 8080");
});
