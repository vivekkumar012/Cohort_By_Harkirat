const express = require("express");

const app = express();

//logs the method, timestamps, url
function loggerMiddleware(req, res, next) {
    console.log(`method is ${req.method}`);
    console.log(`Host is ${req.hostname}`);
     console.log(`Route is ${req.url}`);
    console.log(`Time is ${new Date()}`);
    next();
}

//sabhi route ke liye middleware passed
app.use(loggerMiddleware);
//builtin middleware
app.use(body)

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);