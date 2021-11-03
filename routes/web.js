const express = require("express");
const router = express();
const path = require("path");

const homeworkCSS = path.join(__dirname, "../resources/view/homework-css.html");
const homeworkBlog = path.join(
    __dirname,
    "../resources/view/homework-blog.html"
);

router.get("/cssbox", (req, res) => {
    res.sendFile(homeworkCSS);
});

router.get("/blog", (req, res) => {
    res.sendFile(homeworkBlog);
});
module.exports = router;
