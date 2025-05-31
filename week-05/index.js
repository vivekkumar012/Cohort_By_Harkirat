import express from 'express';

const app = express();

let requestCnt = 0;

function requestInc(req, res, next) {
    requestCnt++;
    console.log(`Total no of req = ${requestCnt}`);
    next();
}

app.get("/sum", requestInc, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a+b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a*b
    })
});


app.listen(3000, () => {
    console.log(`app is listening on the port${3000}`);
});