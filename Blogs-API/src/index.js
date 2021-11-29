const express = require("express");
const blogRouter = require("./routers/blog");
require('./db/mongoose')

const app = express();

app.use(express.json());

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

app.use(blogRouter);

app.listen(3000, () =>
{
    console.log("app is running on port 3000")
}
)