import express from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = "vivekkabackend"

const app = express();
app.use(express.json())

const users = [];

app.post("/signUp", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        msg: "You Successfully Signed up"
    })
})

app.post("/signIn", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i=0; i<users.length; i++) {
        if(users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }
    if(foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(401).json({
            message: "User not exist with this username and pass"
        })
    }

})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);
    const username = decodeInfo.username;

    let foundUser = null;
    for(let i=0; i<users.length; i++) {
        if(users[i].username == username) {
            foundUser = users[i];
        }
    }

    if(foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(401).json({
            message: "Invalid crendential"
        })
    }
})

app.listen(3000);