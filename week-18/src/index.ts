import { Client } from 'pg'
import express from "express"

const pgClient = new Client("postgresql://neondb_owner:npg_1FvlXct7niSV@ep-steep-boat-ad3clyih-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_1FvlXct7niSV",
//     port: 5432,
//     host: "ep-lucky-show-a50i"
// })

pgClient.connect();

const app = express();

app.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const city = req.body.city;
        const country = req.body.country;
        const street = req.body.street;
        const pincode = req.body.pincode;

        const insertQuery = `INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING id;`
        const addressInsertQuery = `INSERT INTO address (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5);`

        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        await pgClient.query("COMMIT;")

        res.json({
            message: "You are signed up"
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000);